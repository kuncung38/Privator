const { decodedToken } = require("../helpers/jwt");
const axios = require("axios");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;

    const payload = decodedToken(access_token);
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:4001/instructors/${payload.id}`,
    });

    if (data) {
      req.user = {
        id: data._id,
        name: data.fullName,
        email: data.email,
      };
      next()
    } else {
      throw { name: "Unauthentication" };
    }

  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
