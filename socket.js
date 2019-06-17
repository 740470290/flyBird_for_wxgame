const ws=require('ws')

const wss=new ws.Server({
  port:4001
})

wss.on('connection',function (socket) {
  // message表示接收信息
  socket.on('message',function (msg) {
    console.log(msg)
  })
  socket.send('服务器收到了数据')
})
