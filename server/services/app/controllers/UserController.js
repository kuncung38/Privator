const { User } = require("../models");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
const axios = require("axios");

class UserController {
  static async loginStudent(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "MissingEmailInput" };
      }
      if (!password) {
        throw { name: "MissingPasswordInput" };
      }

      const { data } = await axios({
        method: "POST",
        url: "http://localhost:4001/students/login",
        data: {
          email,
          password,
        },
      });

      if (!data) {
        throw { name: "User not found" };
      }

      const payload = { id: data._id };
      const access_token = createToken(payload);

      res
        .status(200)
        .json({ access_token, name: data.fullName, email: data.email });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } =
        req.body;
      const { data } = await axios({
        url: `http://localhost:4001/students/register`,
        method: "POST",
        data: {
          username,
          email,
          password,
          phoneNumber,
          address,
        },
      });

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
