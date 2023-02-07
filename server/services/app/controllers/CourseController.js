const { Course, Category, User, Image, sequelize } = require("../models");
const { Op } = require("sequelize");

class CourseController {
  static async getCourses(req, res, next) {
    try {
      const { search } = req.query;
      let options = {};

      options.include = [{ model: Category, attributes: ["name"] }];
      options.order = [["id"]];
      if (search) {
        options.where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      const data = await Course.findAll(options);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postCourse(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, detail, price, CategoryId, level } = req.body;

      if (!name) {
        throw { name: "Name is required" };
      }

      const imgPoster = req.file;
      const data = await Course.create(
        {
          name,
          detail,
          price,
          img: imgPoster.path,
          InstructorId: req.user.id,
          CategoryId,
          level,
        },
        { transaction: t }
      );

      await t.commit();
      res.status(201).json({
        message: `Product added: ${data.name}`,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async getCourseById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Course.findByPk(id, {
        include: {
          model: Category,
          // as: "category",
          attributes: ["name"],
        },
      });
      if (!data) {
        throw { name: "NotFound" };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getCourseByInstructor(req, res, next) {
    try {
      const { id } = req.user;
      const course = await Course.findAll({
        where: { InstructorId: id },
      });

      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseByCategories(req, res, next) {
    try {
      const { id } = req.params;
      const course = await Course.findAll({
        where: { CategoryId: id },
      });
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCourses(req, res, next) {
    try {
      const { id } = req.params;

      const course = await Course.findByPk(id);

      if (!course) {
        throw { name: "NotFound" };
      }

      await Course.destroy({ where: { id } });

      res.status(200).json({ message: "Successfully delete data" });
    } catch (error) {
      next(error);
    }
  }

  static async updateCourses(req, res, next) {
    try {
      const { id } = req.params;
      const { name, detail, price, CategoryId, level } = req.body;
      const imgPoster = req.file;
      await Course.update(
        {
          name,
          detail,
          price,
          img: imgPoster.path,
          CategoryId,
          level,
        },
        { where: { id } }
      );

      res.status(200).json({ message: "Sucessfully update data" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CourseController;
