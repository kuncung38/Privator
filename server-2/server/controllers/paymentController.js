const { Student, Course, Schedule, sequelize, Booking } = require('../models');
const midtransFunction = require('../helpers/midtransFunction');

class PaymentController {
  static async createPayment(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let user = await Student.findByPk(req.student.id);
      // if (user.isSubscribed === true) {
      //   throw { name: 'already_subscribed' };
      // }
      const course = await Course.findByPk(req.params.courseId);

      const booking = await Booking.create(
        {
          status: 'Paid',
          CourseId: course.id,
          StudentId: req.student.id,
          InstructorId: course.InstructorId,
        },
        { transaction: t, returning: true }
      );

      // let inputSchedule = {
      //   StudentId: booking.StudentId,
      //   InstructorId: booking.InstructorId,
      //   CourseId: booking.CourseId,
      //   time: req.body.time,
      // };

      const amount = course.price;
      let midtransToken = await midtransFunction(user, amount);

      // await Schedule.create(inputSchedule, { transaction: t, returning: true });
      await t.commit();
      // await User.update({isSubscribed : true}, {where: {id:req.user.id}})
      res.status(200).json(midtransToken);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}
module.exports = PaymentController;
