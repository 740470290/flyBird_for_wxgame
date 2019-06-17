const http=require('http')
const fs=require('fs')

http.createServer(function (req,res) {
  fs.readFile('./wx36f0af263492cd19.o6zAJsz7GqSxyOBnWC6ZQO2R96PI.ZozkZ0OfvP9ec0994671a5703b1f389caec3d4932c29.jpeg',function (err,data) {
    res.end(data)
  })
}).listen(4002)
