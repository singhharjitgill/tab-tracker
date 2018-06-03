// Server File
const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // Tells Sequelize what kind of Database to connect. In this case SqlLite
      host: process.env.HOST || 'localhost', // Location of the database to connect to
      storage: path.resolve(__dirname, '../../tabtracker.sqlite') // Where to store the database file.
    }
  },

  authentication: {
    // For passing JWT token a secret string needs to be passed which is exactly what this will do.
    // This will pass the secret string which is only known by the server.
    // The string will used to validate if JWT token is valid or not.
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
