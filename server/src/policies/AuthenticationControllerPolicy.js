// Server File
// This will use the 'JOI' package for validating the inputs e.g. is the email valid or not
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    // const {error, value} = Joi.validate(req.body, schema) // ORIGINAL CODE
    // The above code is commented because an error is thrown as 'value' is defined but not used.
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      console.log(value)
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match the following rules:
            <br>
              1. It must contain the following characters. lower-case, upper-case or numbers.
              <br>
              2. It must be contain 8 to 32 characters'
              `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break
      }
    } else {
      next()
    }
    console.log('Policy hit')
  }
}
