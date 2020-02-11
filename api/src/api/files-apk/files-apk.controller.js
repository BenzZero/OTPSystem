import express from 'express'
import dir from 'node-dir'
import log4js from 'log4js'
// import acceptsms from '../../files/apk/accept-sms.apk'
// import erpsystem from '../../files/apk/erp-system.apk'
const logErr = log4js.getLogger('error')
const router = express.Router()

const filesApk = async (req, res, next) => {
  console.log(acceptsms)
  console.log(erpsystem)
  try {
    // dir.readFiles(__dirname, (err, content) => {
    //   if (err) throw err;
    //   console.log('content:', content);
    // });
    return res.json({ success: success })
  } catch (e) {
    logErr.error(e)
    return res
  }
}

router.get('/', filesApk)
module.exports = router
