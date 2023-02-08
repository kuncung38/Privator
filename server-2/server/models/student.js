'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Booking);
      Student.hasMany(models.Schedule);
    }
  }
  Student.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
<<<<<<< HEAD
          msg: "Email must be unique",
        },
        validate: {
          isEmail: {
            msg: "Invalid email format",
          },
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
=======
          msg: 'Email must be unique',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email format',
          },
          notNull: {
            msg: 'Email is required',
          },
          notEmpty: {
            msg: 'Email is required',
>>>>>>> main
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
<<<<<<< HEAD
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
=======
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password is required',
>>>>>>> main
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
<<<<<<< HEAD
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
=======
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
>>>>>>> main
          },
        },
      },
      bio: DataTypes.TEXT,
      role: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      geometry: DataTypes.GEOMETRY,
    },
    {
      sequelize,
<<<<<<< HEAD
      modelName: "Student",
=======
      modelName: 'Student',
>>>>>>> main
    }
  );
  return Student;
};
