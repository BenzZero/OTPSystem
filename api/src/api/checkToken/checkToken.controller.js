import express from 'express'
import bcrypt from 'bcrypt'
import loadDB from '../../config/db'
import signin from '../../config/signin'
import log4js from 'log4js'
const logErr = log4js.getLogger('error')

const router = express.Router()

const checkToken = async (req, res, next) => {
  return res.json(req.decoded)
}

router.get('/', checkToken)
module.exports = router
