const {
  Student,
  Instructor,
  Course,
  Schedule,
  Booking,
  Category,
} = require("../models");

class CourseController {
  //? Get all courses
  static async getAllCourses(req, res, next) {
    try {
      const courses = await Course.findAll({
        include: [
          {
            model: Instructor,
            attributes: ["fullName", "profilePicture", "location"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
        attributes: [
          "id",
          "name",
          "detail",
          "price",
          "imgUrl",
          "type",
          "CategoryId",
          "level",
        ],
      });
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  //? Get one course
  static async getOneCourse(req, res, next) {
    try {
      const course = await Course.findByPk(req.params.id, {
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
          {
            model: Instructor,
            attributes: ["fullName", "profilePicture", "location"],
          },
        ],
        attributes: [
          "id",
          "name",
          "detail",
          "price",
          "imgUrl",
          "type",
          "CategoryId",
          "level",
        ],
      });

      if (!course) throw { name: "Course not found" };
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  //? Get all categories
  static async getAllCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "name"],
      });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  //? Get one category
  static async getOneCategory(req, res, next) {
    try {
      const courses = await Course.findAll({
        where: {
          CategoryId: req.params.id,
        },
        include: [
          {
            model: Instructor,
            attributes: ["fullName", "profilePicture", "location"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
        attributes: [
          "id",
          "name",
          "detail",
          "price",
          "imgUrl",
          "type",
          "CategoryId",
          "level",
        ],
      });

      if (courses.length === 0) throw { name: "No Course in this Category" };
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  //? Post a course
  static async createCourse(req, res, next) {
    try {
      const { name, detail, price, type, imgUrl, CategoryId, level } = req.body;
      if (!name || !detail || !price || !type || !CategoryId || !level) {
        throw { name: "Please fill all the field" };
      }

      const course = await Course.create({
        name,
        detail,
        price,
        imgUrl,
        type,
        CategoryId,
        level,
        InstructorId: req.instructor.id,
      });

      res.status(201).json(course);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CourseController;
