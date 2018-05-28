// Server File
// Controllers have all the end-points define

const {User} = require('../models')
const jwt = require('jsonwebtoken') // Will help in getting a TOKEN for logging a user.
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Email: The login information is incorrect.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password: The login information is incorrect.'
        })
      }

      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to login. <br>Pleaes contact your administrator.`
      })
    }
  }

}
