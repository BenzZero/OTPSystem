import express from 'express'
import loadDB from '../../config/db'
const router = express.Router()

const messages = async (req, res, next) => {
  try {
    const db = await loadDB()
    const type = 'OTP'
    await db.query(`SELECT id, messages, bankname, createdAt FROM messages ${type ? `WHERE TYPE='${type}'` : ''} ORDER BY id DESC LIMIT 5`, (err, results) => {
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