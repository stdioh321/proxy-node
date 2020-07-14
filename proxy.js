var express = require('express');
const path = require('path');
var url = require('url');
var request = require('request');
const { log } = require('console');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/**', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Content-Type", "*/*; charset=ISO-8859-1");
    handleRequest(req, res);
});


let tmpPort = process.env.PORT || 3000;
app.listen(tmpPort, () => {
    console.log("Server running....");
});

function handleRequest(req, res) {
    let tmpUrl = req.url.replace(/^\/+/i, '');
    if (tmpUrl) {
        request({
            url: tmpUrl,
            headers: {
                'Content-Type': '*/*; charset=ISO-8859-1'
            }
        },
            (err, resp, body) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    let errorMsg = { message: "Unable to get the data from the url.", errors: err };
                    res.write(JSON.stringify(errorMsg));

                }
                else {
                    cT = resp.headers['content-type'];
                    res.write(body);
                }
                res.end();
            });

    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("No url found");
    }

}