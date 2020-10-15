var path = require("path");

module.exports = function(app) {
 
    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


  //links to css file
    app.get("/styles", function(req, res) {
      res.sendFile(path.join(__dirname, "./public/assets/css/style.css"));
  });


  //default to the homepage
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });

}