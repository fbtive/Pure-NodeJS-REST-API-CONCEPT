/*
*This is my primary files
*/

//dependencies
const http = require("http");
const url = require("url");

var server = http.createServer(function (req, res) {

    var parsedURL = url.parse(req.url, true);

    var requestPath = parsedURL.pathname;
    var trimmedPath = requestPath.replace(/^\/+|\/+$/g, '');

    var queryStringObject = parsedURL.query;

    var requestMethod = req.method;

    var requestHeaders = req.headers;


    res.end("Hello World\n");

});

server.listen(3000, function(){
    console.log("the server is listening on port 3000 now")
})