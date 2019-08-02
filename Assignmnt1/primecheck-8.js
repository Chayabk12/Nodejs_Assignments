var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('C:/Users/ckavalik/Downloads/node/html.html');
});

app.post('/check', function (req, res) {
    var Number = req.body.Number ;
for (i=2; i<Number; i++){
    if(Number%i==0)
    {
        res.send(Number + " is not prime")
    }

    else{
        res.send(Number + " is prime")
    }
}
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});