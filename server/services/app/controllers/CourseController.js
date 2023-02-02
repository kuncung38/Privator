const { Course, Category, User, Image, sequelize } = require("../models");

class CourseController {
  static async getCourses(req, res, next) {
    try {
      const data = await Course.findAll({
        include: {
          model: Category,
          // as: "category",
          attributes: ["name"],
        },
        order: [["id"]],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, price, mainImg, categoryId, img1, img2 } =
        req.body;

      const createdProduct = await Product.create(
        {
          name,
          description,
          price,
          mainImg,
          authorId: req.user.id,
          categoryId,
        },
        { transaction: t }
      );

      await Image.bulkCreate(
        [
          { productId: createdProduct.id, imgUrl: img1 },
          { productId: createdProduct.id, imgUrl: img2 },
        ],
        {
          transaction: t,
        }
      );

      await t.commit();
      res.status(201).json({
        message: `Product added: ${createdProduct.name}`,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findByPk(id);
      await Image.destroy({ where: { productId: id } });
      await Product.destroy({ where: { id } });
      res.status(200).json({
        message: `Product deleted: ${foundProduct.name}`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findByPk(id, {
        include: {
          model: Image,
          as: "images",
          attributes: ["imgUrl"],
        },
      });
      if (!foundProduct) {
        throw { name: "NotFound" };
      }
      res.status(200).json(foundProduct);
    } catch (err) {
      next(err);
    }
  }

  static async putProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, mainImg, categoryId, img1, img2 } =
        req.body;

      const foundProduct = await Product.findByPk(id);
      if (!foundProduct) {
        throw { name: "NotFound" };
      }
      const slug = name.split(" ").join("-").toLowerCase();
      await Product.update(
        {
          name,
          slug,
          description,
          price,
          mainImg,
          categoryId,
        },
        {
          where: { id },
        }
      );

      const foundImages = await Image.findAll({ where: { productId: id } });

      await Image.bulkCreate(
        [
          { id: foundImages[0].id, imgUrl: img1 },
          { id: foundImages[1].id, imgUrl: img2 },
        ],
        {
          updateOnDuplicate: ["imgUrl"],
        }
      );

      res.status(201).json({
        message: `Product updated: ${foundProduct.name}`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getPubProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["name"],
          },
          {
            model: Image,
            as: "images",
            attributes: ["imgUrl"],
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "authorId", "categoryId"],
        },
        order: [["id"]],
      });
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  static async getPubProductById(req, res, next) {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findByPk(id, {
        include: {
          model: Image,
          as: "images",
          attributes: ["imgUrl"],
        },
      });
      if (!foundProduct) {
        throw { name: "NotFound" };
      }
      res.status(200).json(foundProduct);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CourseController;
