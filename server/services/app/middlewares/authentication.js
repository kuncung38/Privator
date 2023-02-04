const { decodedToken } = require("../helpers/jwt");
const axios = require("axios");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = decodedToken(access_token);

    const { data } = await axios({
      method: "GET",
      url: `http://localhost:4001/students/${payload.id}`,
    });

    if (data) {
      req.user = {
        id: data[0]._id,
        name: data[0].fullName,
        email: data[0].email,
      };
      next();
    } else {
      throw { name: "Unauthentication" };
    }
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;
