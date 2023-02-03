const { Product } = require("../models");

async function authorization(req, res, next) {
  try {
    // const { id } = req.params;
    // const foundProduct = await Product.findByPk(id);
    // if (!foundProduct) {
    //   throw { name: "NotFound" };
    // }
    if (req.user.role === "admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
}

module.exports = authorization;
