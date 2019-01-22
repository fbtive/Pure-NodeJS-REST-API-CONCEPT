/*
*This is my primary files
*/

//dependencies
const http = require("http");

var server = http.createServer(function (req, res) {
    res.end("Hello World\n");
});

server.listen(3000, function(){
    console.log("the server is listening on port 3000 now")
})