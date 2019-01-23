/*
*This is my primary files
*/

//dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

var server = http.createServer(function (req, res) {

    var parsedURL = url.parse(req.url, true);

    var requestPath = parsedURL.pathname;
    var trimmedPath = requestPath.replace(/^\/+|\/+$/g, '');

    var queryStringObject = parsedURL.query;

    var requestMethod = req.method;

    var requestHeaders = req.headers;

    var decoder = new StringDecoder('utf-8');
    var buffer = '';

    req.on('data', function(bufferData) {
        buffer += decoder.write(bufferData);
    });

    req.on('end', function() {
        buffer += decoder.end();

        res.end("Hello World\n");
        console.log("Buffer data received: " + buffer);
    })

});

server.listen(3000, function(){
    console.log("the server is listening on port 3000 now")
})