var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var path = require("path");
var expressJwt = require("express-jwt");
var config = require("./config")

app.use(bodyParser.json());
app.use(morgan("dev"));


console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(config.database, function(err) {
    if(err) throw err;
    console.log("connected to db");
});

app.use("/api", expressJwt({secret: config.secret}));
app.use("/auth", require('./routes/authRoute'))
app.use("api/recipes", require("./routes/recipeRoute"));
app.use("api/trucks", require("./routes/restaurantRoute"));

app.get("/", function(req, res) {
    res.send("working")
})

app.listen(port, function() {
    console.log("app is listening on port: " + port)
});