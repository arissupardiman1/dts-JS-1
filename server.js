const http = require('http')

const server = http.createServer(function(req, res){
    res.end('Hi, Selamat Datang di Node JS')
})

server.listen(8000)
console.log('server running at port 8000')