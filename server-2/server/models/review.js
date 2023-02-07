"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Course);
      this.belongsTo(models.Student);
    }
  }
  Review.init(
    {
      score: DataTypes.INTEGER,
      description: DataTypes.STRING,
      CourseId: DataTypes.INTEGER,
      StudentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
