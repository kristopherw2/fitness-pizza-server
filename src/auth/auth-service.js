const config = require('../config')
const jwt = require('jsonwebtoken')

const AuthService = {
  getUserWithUserName(db, username) {
    return db('users')
      .where({ username })
      .first()
  },
  parseBasicToken(token) {
    return Buffer
      .from(token, 'base64')
      .toString()
      .split(':')
  },
  createJwt(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      algorithm: 'HS256',
      })
    },
    verifyJwt(token){
      return jwt.verify(token, config.JWT_SECRET, {
        algorithms: ['HS256']
      })
    },
}

module.exports = AuthService