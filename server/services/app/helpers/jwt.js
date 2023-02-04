const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_RAHASIA;

function createToken(value) {
  return jwt.sign(value, secret);
}

function decodedToken(value) {
  return jwt.verify(value, secret);
}

module.exports = { createToken, decodedToken };
