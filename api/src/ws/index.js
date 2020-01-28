import { aWss } from '../../index'
import jwt from 'jsonwebtoken'
import conf from '../config'
import loadDB from '../config/db'

const broadcast = (clients, message) => {
  clients.forEach((client) => {
    client.send(message);
  });
};

const messages = async (ws, req) => {
  console.log('Client connected..');
  const { token } = req.params

  if (token) {
    jwt.verify(token, conf.secretKey, (err) => {
      if (err) {
        ws.send('400')
        ws.close()
      } else {
        ws.send('200')
      }
    })
  }

  ws.on('message', async (msg) => {
    const db = await loadDB()
    console.log('xxxxxxxxxxxxxxxxxxxxxx')
    console.log(msg)
    console.log('xxxxxxxxxxxxxxxxxxxxxx')
    broadcast(aWss.clients, msg)
    // const { messages, type, smsId } = JSON.parse(msg)


    // console.log(messages, type, smsId)
    // try {
    //   const message = await db.query(`INSERT INTO messages (messages, type) VALUES ('${messages}', '${type}')`, (err, results) => {
    //     if (!err) {
    //       console.log(messages, type)
    //       console.log(err)
    //       console.log(results)
    //       broadcast(aWss.clients, msg)
    //     } else {
    //       console.log(err)
    //       ws.send('400')
    //     }
    //   })
    // } catch (e) {
    //   console.log(e)
    // }
  })

  ws.on('close', async (msg) => {
    console.log('disconnected');
  })
}

module.exports = messages