// require
const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const fs = require('fs');
var sanitizeHtml = require('sanitize-html');




app.get('/', (req, res) => {
    fs.readFile('./data/template', 'utf8', (err, data) => {
        if (err) throw err;
        const sanitizeTemplate = sanitizeHtml(data);
        res.end(sanitizeTemplate);
    });
});


app.listen(port, () => console.log(`3000번 port에 http server를 띄웠습니다.`))
