import express from 'express'
import loadDB from '../../config/db'
import log4js from 'log4js'
const logErr = log4js.getLogger('error')
const router = express.Router()

const messages = async (req, res, next) => {
  try {
    const { type } = req.query
    const db = await loadDB()
    await db.query(`SELECT id, messages, bankname, type, money, otp, createdAt FROM messages ${type ? `WHERE TYPE='${type}'` : ''} ORDER BY id DESC LIMIT 5`, (err, results) => {
      if (err) throw err
      return res.json(results.reverse())
    })
  } catch (e) {
    logErr.error(e)
    return res
  }
}

router.get('/', messages)
module.exports = router
