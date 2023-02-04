const { Category, Course } = require("../models");

class CategoryController {
  static async getCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id"]],
      });
      res.status(200).json(categories);
    } catch (err) {
      next(err);
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
}

module.exports = CategoryController;
