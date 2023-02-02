const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);
    const foundUser = await User.findByPk(payload.id);
    if (!foundUser) {
      throw { name: "InvalidAccess" };
    }
    req.user = {
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;
