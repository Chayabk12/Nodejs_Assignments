var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {

    fs.readFile("atul.txt", "utf8", function (error, data) {

        console.log(data);
        res.end(data)

    });

});

server.listen(9090);

console.log('server running...')
