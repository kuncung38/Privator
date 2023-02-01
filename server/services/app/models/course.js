"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Category);
      Course.hasMany(models.Schedule);
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name is required" },
          notNull: { msg: "Name is required" },
        },
      },
      description: DataTypes.TEXT,
      level: DataTypes.STRING,
      price: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
      InstructorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
