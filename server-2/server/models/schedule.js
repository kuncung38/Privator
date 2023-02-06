'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Instructor);
      Schedule.belongsTo(models.Student);
    }
  }
  Schedule.init(
    {
      InstructorId: DataTypes.INTEGER,
      StudentId: DataTypes.INTEGER,
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Schedule',
    }
  );
  return Schedule;
};
