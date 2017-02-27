var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var path = require("path");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/recipes", require("./recipeRoute"));
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/sauced", function(err) {
    if(err) throw err;
    console.log("connected to db");
});

app.listen(port, function() {
    console.log("app is listening on port: " + port)
});