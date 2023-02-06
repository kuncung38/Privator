const { Student } = require('../models');
const midtransFunction = require('../helpers/midtransFunction');

class PaymentController {
  static async createPayment(req, res, next) {
    try {
      const user = await Student.findByPk(req.student.id);
      // if (user.isSubscribed === true) {
      //   throw { name: 'already_subscribed' };
      // }

      let midtransToken = await midtransFunction(user);
      // await User.update({isSubscribed : true}, {where: {id:req.user.id}})
      res.status(200).json(midtransToken);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PaymentController;
