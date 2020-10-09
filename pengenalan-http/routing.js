const http = require('http')

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html'})
    switch (req.url){
        case '/about':
            res.write('Ini adalah About')
            break
        case '/produk':
            res.write('ini adalah produk')
            break
        case '/profile':
            res.write('ini adalah profile')
            break
        case '/register':
            res.write("ini adalah halaman register")
            break
        default:
            res.write("404 Halaman Tidak Ditemukan")
    }
    res.end()
})

server.listen(8000)
console.log('server running at port 8000')