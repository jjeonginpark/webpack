// require
const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const url = require('url');


app.use("/public", express.static(__dirname + "/public")); // client단에서 자바스크립트 경로 찾아주는 역할.
console.log(__dirname);

app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});


app.listen(port, () => console.log(`3000번 port에 http server를 띄웠습니다.`))
