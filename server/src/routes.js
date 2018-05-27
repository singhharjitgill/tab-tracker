// Server File
module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Your user is registered!. Hello ${req.body.email}.`
    })
  })
}
