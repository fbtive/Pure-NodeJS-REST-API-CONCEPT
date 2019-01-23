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

    //assign request buffer on request listener received data
    req.on('data', function(bufferData) {
        buffer += decoder.write(bufferData);
    });

    //assign handler page from router
    req.on('end', function() {
        buffer += decoder.end();

        var chosenHandler = typeof(router[trimmedPath]) !== "undefined" 
            ? router[trimmedPath] : handlers.notFound;

        var data = {
            trimmedPath: trimmedPath,
            headers: requestHeaders,
            method: requestMethod,
            queryStringObject : queryStringObject,
            payload: buffer
        }

        chosenHandler(data, function(statusCode, payload) {
            statusCode = typeof(statusCode) == "number" ? statusCode : 200;
            payload = typeof(payload) == "object" ? payload : {};

            var payloadString = JSON.stringify(payload);

            res.writeHead(statusCode);
            res.end(payloadString);
            console.log("Response data received: " + statusCode, payloadString);
        })
    })

});

server.listen(3000, function(){
    console.log("the server is listening on port 3000 now")
})

var handlers = {};

handlers.sample = function(data, callback) {

    callback(406, {'name': 'sample handler'});
}

handlers.notFound = function(data, callback) {
    callback(404, {'name': 'Page Not Found'});
}

var router = {
    'sample': handlers.sample
}