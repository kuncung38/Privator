const { Category } = require("../models");

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
}

module.exports = CategoryController;
