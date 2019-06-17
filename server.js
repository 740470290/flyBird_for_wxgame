const http=require('http')

http.createServer(function (req,res) {
  console.log(req)
  res.end(req.toString())
}).listen(4000)
