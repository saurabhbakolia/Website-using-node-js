const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000

const app = express();

app.use(function(req, res, next) {
    console.log("Server request");
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    // res.send("Hello This is your first request!");
    res.sendFile("index.html")
});

app.get('/about', function(req, res){
    res.sendFile("./public/about.html", {root:__dirname});
});

app.get('/contact', function(req, res){
    res.sendFile("./public/contact.html", {root:__dirname});
});


app.listen(port, function(){
    console.log("Server listening on port:" + port);
});

