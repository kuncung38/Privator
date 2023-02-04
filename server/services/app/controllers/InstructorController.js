const axios = require("axios");
const { createToken } = require("../helpers/jwt");
class InstructorController {
  static async login(req, res, next) {
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
        url: "http://localhost:4001/instructors/login",
        data: {
          email,
          password,
        },
      });

     
      const payload = { id: data._id };
      const access_token = createToken(payload);

      res
        .status(200)
        .json({ access_token, name: data.fullName, email: data.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InstructorController;
