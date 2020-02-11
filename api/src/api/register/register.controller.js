import express from 'express'
import bcrypt from 'bcrypt'
import loadDB from '../../config/db'
import signin from '../../config/signin'
import conf from '../../config'
import log4js from 'log4js'
const logErr = log4js.getLogger('error')
const router = express.Router()

const register = async (req, res, next) => {
  const { username, password, name } = req.body
  try {
    if (username && password && name) {
      const db = await loadDB()
      const hash = await bcrypt.hash(password, conf.saltRounds).then(hash => hash)
      await db.query(`INSERT INTO users (username, password, name, role, status) VALUES ('${username}', '${hash}', '${name}', 'admin', 1)`, async (err, results) => {
        if (err) throw err
        const token = signin({ id: results.insertId, username })
        return res.json({ success: 'register success', token, name })
      })
    } else {
      return res.json({ error: 'required', username, password, name })
    }
    return res
  } catch (e) {
    logErr.error(e)
    return res
  }
}

router.post('/', register)
module.exports = router
