const {
  Student,
  Instructor,
  Course,
  Schedule,
  Booking,
  Category,
} = require('../models');

class ScheduleController {
  //? Get all schedules
  static async getAllSchedules(req, res, next) {
    try {
      const schedules = await Schedule.findAll({
        where: {
          InstructorId: req.instructor.id,
        },
        include: [
          {
            model: Student,
            attributes: ['fullName', 'location'],
          },
        ],
      });

      res.status(200).json(schedules);
    } catch (error) {
      next(error);
    }
  }

  //? Complete a schedule
  static async completeSchedule(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const schedule = await Schedule.findByPk(req.params.id);

      if (!schedule) throw { name: 'Schedule not found' };

      await Schedule.destroy(
        {
          where: { id: req.params.id },
        },
        { transaction: t, returning: true }
      );

      await Booking.update(
        {
          status: 'Completed',
        },
        {
          where: {
            StudentId: schedule.StudentId,
            InstructorId: schedule.InstructorId,
          },
        },
        { transaction: t, returning: true }
      );

      await t.commit();
      res.status(200).json(schedule);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = ScheduleController;
