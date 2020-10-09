const http = require('http')

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('Hi, Selamat Datang di <b> Node JS</b>')
    res.end()
})

server.listen(8000)
console.log('server running at port 8000')