// Server File
// Controllers have all the end-points define

const {Song} = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const search = req.query.search
      let songs = null
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to fetch the songs. Please try again later.`
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to create the song..`
      })
    }
  },

  async show (req, res) {
    try {
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to fetch the songs. Please try again later.`
      })
    }
  },

  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to update the song..`
      })
    }
  }
}
