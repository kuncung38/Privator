const {
  Student,
  Instructor,
  Course,
  Schedule,
  Booking,
  Category,
} = require("../models");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

//* Mapbox
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

class InstructorController {
  //? Register
  static async register(req, res, next) {
    try {
      if (!req.body.email) throw { name: "Email is required" };
      if (!req.body.password) throw { name: "Password is required" };
      if (!req.body.fullName) throw { name: "Full Name is required" };
      if (!req.body.birthDate) throw { name: "Birth Date is required" };
      if (!req.body.location) throw { name: "Location is required" };

      let input = {
        email: req.body.email,
        password: hashPassword(req.body.password),
        fullName: req.body.fullName,
        bio: req.body.bio,
        role: "instructor",
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber,
        profilePicture: req.body.profilePicture, //! Multer -> Ganti ini dengan req.file.path
        location: req.body.location,
      };

      const instructor = await Instructor.create(input);
      res.status(201).json({ message: "Success create a new instructor!" });
    } catch (error) {
      next(error);
    }
  }

  //? Login
  static async login(req, res, next) {
    try {
      if (!req.body.email) throw { name: "Email is required" };
      if (!req.body.password) throw { name: "Password is required" };

      const instructor = await Instructor.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!instructor) throw { name: "Invalid email or password" };

      const isPasswordValid = comparePassword(
        req.body.password,
        instructor.password
      );

      if (!isPasswordValid) throw { name: "Invalid email or password" };

      let payload = {
        id: instructor.id,
      };

      let access_token = createToken(payload);

      res.status(200).json({
        access_token,
        location: instructor.geometry,
        role: instructor.role,
        email: instructor.email,
      });
    } catch (error) {
      next(error);
    }
  }

  //? Get all instructors
  static async getAllInstructors(req, res, next) {
    try {
      const instructors = await Instructor.findAll({
        include: [
          {
            model: Course,
            attributes: [
              "name",
              "detail",
              "price",
              "imgUrl",
              "type",
              "CategoryId",
              "level",
            ],
          },
        ],
        attributes: [
          "id",
          "role",
          "fullName",
          "bio",
          "profilePicture",
          "location",
          "phoneNumber",
          "email",
        ],
      });
      res.status(200).json(instructors);
    } catch (error) {
      next(error);
    }
  }

  //? Get one instructor
  static async getOneInstructor(req, res, next) {
    try {
      const instructor = await Instructor.findByPk(req.params.id, {
        include: [
          {
            model: Course,
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
            include: [
              {
                model: Category,
                attributes: ["name"],
              },
            ],
          },
          {
            model: Schedule,
            attributes: ["time"],
            include: [
              {
                model: Student,
                attributes: ["fullName", "location"],
              },
            ],
          },
        ],
        attributes: [
          "id",
          "role",
          "fullName",
          "bio",
          "profilePicture",
          "location",
          "phoneNumber",
          "email",
        ],
      });

      if (!instructor) throw { name: "Instructor not found" };
      res.status(200).json(instructor);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InstructorController;
