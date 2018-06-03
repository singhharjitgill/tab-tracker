// Server File
// Points to Bookmark model(table) in sqlite

module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {})
  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}
