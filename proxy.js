t = "http://www.superdownloads.com.br";
var http = require('http');
var url = require('url');
var request = require('request');


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
http.createServer(onRequest).listen(process.env.PORT || 3000);

function onRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var queryData = url.parse(req.url, true).query;

    if (queryData.url) {
        request(queryData.url, (err, resp, body) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("Error: " + JSON.stringify(err));
            }
            else {
                res.write(body);
                // console.log(resp);
            }
            res.end();
        });

    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("No url found");
    }
}