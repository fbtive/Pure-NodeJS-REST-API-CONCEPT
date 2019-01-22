/*
*This is my primary files
*/

//dependencies
const http = require("http");
const url = require("url");

var server = http.createServer(function (req, res) {

    var parsedURL = url.parse(req.url, true);
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    res.end("Hello World\n");

    console.log('Request received on path: ' + trimmedPath);
});

server.listen(3000, function(){
    console.log("the server is listening on port 3000 now")
})