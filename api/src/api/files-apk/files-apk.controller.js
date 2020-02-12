import express from 'express'
import fs from 'fs'
import path from 'path'
import log4js from 'log4js'
// import acceptsms from '../../files/apk/accept-sms.apk'
// import erpsystem from '../../files/apk/erp-system.apk'
const logErr = log4js.getLogger('error')
const router = express.Router()

const filesApk = async (req, res, next) => {
  console.log(acceptsms)
  console.log(erpsystem)
  try {
    fs.readdir(path.resolve(__dirname, '..', 'public'), 'utf8', (err, files) => {
      files.forEach((file) => console.info(file))
    })
    return res.json({ success: success })
  } catch (e) {
    logErr.error(e)
    return res
  }
}

router.get('/', filesApk)
module.exports = router
