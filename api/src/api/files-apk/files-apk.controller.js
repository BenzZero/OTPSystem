import express from 'express'
import fs from 'fs'
import path from 'path'
import log4js from 'log4js'
const logErr = log4js.getLogger('error')
const router = express.Router()

const filesApkAll = async (req, res, next) => {
  try {
    await fs.readdir(path.resolve(__dirname, '../../..', 'public/files/apk'), 'utf8', async (err, files) => {
      return res.json({ files })
    })
  } catch (e) {
    logErr.error(e)
    return res
  }
}

const filesApkName = async (req, res, next) => {
  try {
    const { name } = req.params
    let pathFile = path.join(__dirname, '../../..', `public/files/apk`, name)
    return res.download(pathFile, name, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('downloading successful');
      }
    })
  } catch (e) {
    logErr.error(e)
    return res
  }
}

router.get('/:name', filesApkName)
router.get('/', filesApkAll)
module.exports = router
