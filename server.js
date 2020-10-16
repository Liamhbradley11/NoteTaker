//dependencies
var express = require("express");
// const path = require("path");


//initialize express
var app = express();
var PORT = process.env.PORT || 3000;


//seting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//route
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


//listen on port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}); 