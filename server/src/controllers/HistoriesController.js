// Server File
// Controllers have all the end-points define
const {History,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {

  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        UserId: userId,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history))
      res.send(_.uniqBy(histories, history => history.SongId))
      // res.send(_.uniq(histories))
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to fetch the history. Please try again later.`
      })
    }
  },
  async post (req, res) {
    try {
      // res.send(req.body.bookmark.songId)
      const userId = req.user.id
      const {songId} = req.body
      console.log(req.body)
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to create the history. Please try again later.`
      })
    }
  }
}
