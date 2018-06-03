// Server File
// Controllers have all the end-points define
const {Bookmark,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {

  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: err// `An error has occured while trying to fetch the bookmark. Please try again later.`
      })
    }
  },
  async post (req, res) {
    try {
      // res.send(req.body.bookmark.songId)
      const userId = req.user.id
      const {songId} = req.body.bookmark
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'Bookmark for the given user and song already exists.'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },

  async delete (req, res) {
    try {
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'You do not have access to this bookmark.'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to delete the bookmark. Please try again later.`
      })
    }
  }
}
