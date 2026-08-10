const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end("you are in the home page")
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        req.end("you are in about page")
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        req.end("Choose an url")
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});