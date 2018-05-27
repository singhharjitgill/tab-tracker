// Server File
// Controllers have all the end-points define

const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
    // res.send({
    //   message: `Your user is registered!. Hello ${req.body.email}.`
    // })
  }
}
