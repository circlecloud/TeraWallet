import io from 'weapp.socket.io'

const client = io('https://tera-ws.miaowoo.cc/web', {
  path: '/ws',
  transports: ['websocket'],
  autoConnect: false
})

client.on('connect', () => {
  console.log('connect')
})

client.on('message', (msg) => {
  console.log(msg)
})

export default client
