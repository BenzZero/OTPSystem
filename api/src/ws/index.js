import { aWss } from '../../index'

const broadcast = (clients, message) => {
  clients.forEach((client) => {
    client.send(message);
  });
};


const echo = async (ws, req) => {
  console.log('Client connected..');
  ws.on('message', function (msg) {
    broadcast(aWss.clients, msg)
  })
}

module.exports = echo