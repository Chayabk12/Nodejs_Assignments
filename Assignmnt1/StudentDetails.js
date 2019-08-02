var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('C:/Users/ckavalik/Downloads/node/studentD.html');
});

app.post('/checkStudent', function (req, res) {
    var Marks = req.body.Marks;
 var Name = req.body.Name;
 var StudentNum= req.body.StudentNo;

 if(Marks<50)
 {
     res.send(Name +"having student number" + StudentNum+ " has got poor Result" )
 }

 else if (Marks>=50 && Marks<75){
    res.send(Name +" having student number" + StudentNum+ " has got Average Result" )
 }
 else if(Marks>= 75 && Marks<90){
    res.send(Name +" having student number" + StudentNum+ " has got Good Result" )
 }
 else if(Marks >=90 && Marks<=100){
    res.send(Name +" having student number" + StudentNum+ " has got Excelent Result" )
 }

 
});

var server = app.listen(9000, function () {
    console.log('Node server is running..');
});


