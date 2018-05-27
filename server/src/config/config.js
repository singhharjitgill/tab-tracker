// Server File
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // Tells Sequelize what kind of Database to connect
      host: process.env.HOST || 'localhost', // Location of the database to connect to
      storage: './tabtracker.sqlite' // Where to store the database file.
    }
  }
}
