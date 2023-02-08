const { Booking } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const data = await Booking.findAll({
      where: { StudentId: req.student.id, CourseId: id },
    });
    if (!data[0]) {
      throw { name: "Forbidden" };
    }
    if (data[0].status === "Paid") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
}

module.exports = authorization;
