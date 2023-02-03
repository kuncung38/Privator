const { User } = require("../models");
const { signPayload } = require("../helpers/jwt.js");
const { comparePassword } = require("../helpers/bcrypt.js");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "MissingEmailInput" };
      }
      if (!password) {
        throw { name: "MissingPasswordInput" };
      }
      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser || !comparePassword(password, foundUser.password)) {
        throw { name: "InvalidCredentials" };
      }
      const payload = { id: foundUser.id };
      const access_token = signPayload(payload);
      res.status(200).json({ access_token, email: foundUser.email });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const createdUser = await User.create({
        username,
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });
      res.status(201).json({ message: `User created: ${createdUser.email}` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
