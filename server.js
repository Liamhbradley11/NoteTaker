//dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express
const app = express();
const PORT = process.env.PORT || 3000;

//seting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


//route
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//listen on port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}); 