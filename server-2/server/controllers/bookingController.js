const {
  Student,
  Instructor,
  Course,
  Schedule,
  Booking,
  Category,
} = require('../models');

class BookingController {
  //? Get all bookings
  static async getAllBookings(req, res, next) {
    try {
      const bookings = await Booking.findAll({
        where: {
          StudentId: req.student.id,
        },
        include: [
          {
            model: Course,
            attributes: ['name'],
          },
          {
            model: Instructor,
            attributes: ['fullName'],
          },
        ],
        attributes: ['id', 'status', 'CourseId', 'InstructorId', 'StudentId'],
      });

      res.status(200).json(bookings);
    } catch (error) {
      next(error);
    }
  }

  //? Get one booking
  static async getOneBooking(req, res, next) {
    try {
      const booking = await Booking.findByPk(req.params.id, {
        include: [
          {
            model: Course,
            attributes: ['name'],
          },
          {
            model: Instructor,
            attributes: ['fullName'],
          },
        ],
        attributes: ['id', 'status'],
      });

      res.status(200).json(booking);
    } catch (error) {
      next(error);
    }
  }

  //? Book a course
  static async createBooking(req, res, next) {
    try {
      const CourseId = req.params.courseId;
      let course = await Course.findByPk(CourseId);

      if (!course) throw { name: 'Course not found' };

      const booking = await Booking.create({
        status: 'Booked',
        CourseId,
        StudentId: req.student.id,
        InstructorId: course.InstructorId,
      });

      res.status(201).json(booking);
    } catch (error) {
      next(error);
    }
  }

  //? Pay a booking
  static async payBooking(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const booking = await Booking.findByPk(req.params.id);

      const scheduleCheck = await Schedule.findAll({
        where: {
          InstructorId: booking.InstructorId,
        },
      });

      if (scheduleCheck.length >= 5) throw { name: 'Course is fully booked' };

      for (let schedule of scheduleCheck) {
        if (req.body.time === schedule.time) {
          throw { name: 'Time is not available' };
        }
      }

      if (!booking) throw { name: 'Booking not found' };

      if (booking.status === 'Paid') throw { name: 'Already Paid' };

      await Booking.update(
        {
          status: 'Paid',
        },
        {
          where: {
            id: req.params.id,
          },
        },
        { transaction: t, returning: true }
      );

      let inputSchedule = {
        StudentId: booking.StudentId,
        InstructorId: booking.InstructorId,
        CourseId: booking.CourseId,
        time: req.body.time,
      };

      await Schedule.create(inputSchedule, { transaction: t, returning: true });

      await t.commit();
      res.status(200).json(booking);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = BookingController;
