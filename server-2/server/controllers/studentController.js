const { Student, Course } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

//* Mapbox
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

class StudentController {
  //? Register
  static async register(req, res, next) {
    try {
      if (!req.body.email) throw { name: 'Email is required' };
      if (!req.body.password) throw { name: 'Password is required' };
      if (!req.body.fullName) throw { name: 'Full Name is required' };
      if (!req.body.birthDate) throw { name: 'Birth Date is required' };
      if (!req.body.location) throw { name: 'Location is required' };

      const geoData = await geocoder
        .forwardGeocode({
          query: req.body.location,
          limit: 1,
        })
        .send();

      let input = {
        email: req.body.email,
        password: hashPassword(req.body.password),
        fullName: req.body.fullName,
        bio: req.body.bio,
        role: 'student',
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber,
        profilePicture: req.body.profilePicture, //! Multer -> Ganti ini dengan req.file.path
        location: req.body.location,
        geometry: geoData.body.features[0].geometry,
      };

      const student = await Student.create(input);
      res.status(201).json({ message: 'Success create a new student' });
    } catch (error) {
      next(error);
    }
  }

  //? Login
  static async login(req, res, next) {
    try {
      if (!req.body.email) throw { name: 'Email is required' };
      if (!req.body.password) throw { name: 'Password is required' };

      const student = await Student.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!student) throw { name: 'Invalid email or password' };

      const isPasswordValid = comparePassword(
        req.body.password,
        student.password
      );

      if (!isPasswordValid) throw { name: 'Invalid email or password' };

      let payload = {
        id: student.id,
      };

      let access_token = createToken(payload);

      res.status(200).json({
        access_token,
        location: student.geometry,
        role: student.role,
        email: student.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StudentController;
