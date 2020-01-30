import { aWss } from '../../index'
import jwt from 'jsonwebtoken'
import conf from '../config'
import loadDB from '../config/db'
import log4js from 'log4js'
const logErr = log4js.getLogger('error')

const broadcast = (clients, message) => {
  clients.forEach((client) => {
    client.send(message);
  });
};

const messages = async (ws, req) => {
  console.log('Client connected..');
  const { token } = req.params

  if (token) {
    jwt.verify(token, conf.secretKey, (err, decoded) => {
      if (err) {
        ws.send('400')
        ws.close()
      }
    })
  }

  ws.on('message', async (msg) => {
    const db = await loadDB()
    try {
      const { message, type, bankname } = JSON.parse(msg)
      if (message && type && bankname) {
        await db.query(`INSERT INTO messages (messages, type, bankname, users_id) VALUES ('${message}', '${type}', '${bankname}', 1)`, (err, results) => {
          if (!err) {
            broadcast(aWss.clients, msg)
          } else {
            ws.send('400')
          }
        })
      }
    } catch (e) {
      logErr.error(e)
      console.log(e)
    }
  })

  ws.on('close', async (msg) => {
    console.log('disconnected');
  })
}

module.exports = messages