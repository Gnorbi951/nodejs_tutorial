
const http = require('http');

const server = http.createServer((req, resp) => {
    if (req.url === '/') {
        resp.write("hello there")
        resp.end()
    }
});

server.on('connection', socket => {
    console.log('New connection');
})

server.listen(8080)
console.log('serving on port 8080');

