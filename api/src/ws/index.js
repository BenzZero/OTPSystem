import { aWss } from '../../index'
import jwt from 'jsonwebtoken'
import conf from '../config'
import loadDB from '../config/db'
import log4js from 'log4js'
import md5 from 'md5'
const logErr = log4js.getLogger('error')

const broadcast = (clients, messages) => {
  clients.forEach((client) => {
    client.send(messages);
  });
};

const messages = async (ws, req) => {
  console.log('Client connected..');
  const { token } = req.params

  if (token) {
    if (token.startsWith('sms')) {
      let tokenmd5 = token.slice(3, token.length)
      if (tokenmd5 !== md5('sms#systemotp')) {
        ws.send('400')
        ws.close()
      }
    } else {
      jwt.verify(token, conf.secretKey, (err, decoded) => {
        if (err) {
          ws.send('400')
          ws.close()
        }
      })
    }
  }

  ws.on('message', async (msg) => {
    const db = await loadDB()
    try {
      const { messages, type, bankname, money, otp } = JSON.parse(msg)
      console.log(messages, type, bankname, money, otp)
      if (messages && type && bankname) {
        await db.query(`INSERT INTO messages (messages, type, bankname, money, otp, users_id) VALUES ('${messages}', '${type}', '${bankname}', '${money || ''}', '${otp || ''}', 1)`, (err, results) => {
          if (!err) {
            console.log('scc')
            broadcast(aWss.clients, msg)
          } else {
            console.log('err')
            ws.send('400')
          }
          console.log(err)
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