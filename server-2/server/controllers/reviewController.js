const { Course, Category, Review, Student, sequelize } = require("../models");

class ReviewController {
  static async getReviews(req, res, next) {
    try {
      const data = await Review.findAll({
        include: [
          {
            model: Course,
          },
          {
            model: Student,
          },
        ],
        order: [["id"]],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postReview(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { score, description, CourseId, StudentId } = req.body;

      const data = await Review.create(
        {
          score,
          description,
          CourseId: 1,
          StudentId: 1,
        },
        { transaction: t }
      );

      await t.commit();
      res.status(201).json({
        message: `Thank you for your feedback`,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }
}

module.exports = ReviewController;
