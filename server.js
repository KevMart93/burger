// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Use express to parse body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Use handlebars to generate HTML
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(routes);

// Listen to PORT
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});