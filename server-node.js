const http = require('http')

const hostname = '127.0.0.1';

const port = 3000

const server = http.createServer((req,res)=> {
    if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello World\n')
    }else{
        res.statusCode = 404;
        res.setHeader('content-Type', 'text/plain');
        res.end("wrong request")
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});