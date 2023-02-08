const { Course, Review, Student, sequelize, Instructor } = require("../models");

class ReviewController {
  static async getReviews(req, res, next) {
    try {
      const { id } = req.params;
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
        where: { CourseId: id },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postReview(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const { score, description } = req.body;
      if (!score) {
        throw { name: "Score is missing" };
      }

      const data = await Review.create(
        {
          score,
          description,
          CourseId: id,
          StudentId: req.student.id,
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

  static async getInstructorReviews(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Instructor.findOne({
        attributes: ["email"],
        include: [
          {
            model: Course,
            attributes: ["name"],
            plain: true,
            include: {
              model: Review,
              attributes: ["score"],
              plain: true,
            },
          },
        ],
        where: { id },
        plain: true,
      });
      let courses = data.Courses;
      // let review = courses[0].dataValues.Reviews;
      // console.log(courses);
      // console.log(review);
      let result = [];
      for (let i = 0; i < courses.length; i++) {
        let avgCourse = 0;
        let totalScore = 0;
        let reviewCount = 0;
        for (let j = 0; j < courses[i].dataValues.Reviews.length; j++) {
          reviewCount++;
          totalScore += courses[i].dataValues.Reviews[j].score;
        }
        avgCourse = totalScore / reviewCount;
        if (!isNaN(avgCourse)) {
          result.push(avgCourse);
        }
      }
      let total = 0;
      result.forEach((el) => {
        total += el;
      });
      let avg = total / result.length;
      res.status(200).json(avg);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ReviewController;
