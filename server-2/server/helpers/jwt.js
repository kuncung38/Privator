const jwt = require('jsonwebtoken')
let secret = process.env.JWT_SECRET

const createToken = (payload) => {
  return jwt.sign(payload, secret)
}

const decodeToken = (token) => {
  return jwt.verify(token, secret)
}

module.exports = { createToken, decodeToken }