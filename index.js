const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let mongoose = require("mongoose");



const todoRoutes = require("./routes/todos");

// mongoose.connect("mongodb+srv://test:test1@cluster0-lqhsl.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

    
app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);


app.listen(process.env.PORT,  process.env.IP, function() {
    console.log("APP IS RUNNING " + process.env.PORT);
});