var fs = require("fs");

var notesInfo = require("../db/db.json");

module.exports = function(app){

    app.get("/api/notes", function(req, res){
        res.json(notesInfo);
        console.log(notesInfo)
    })

    app.post("/api/notes", function(req, res){

        req.body.id = notesInfo.length + 1;

        notesInfo.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(notesInfo), function(err) {
            if (err) throw err;
        })

        res.json(true)
    })


    app.delete("/api/notes/:id", function(req, res){
        for(const value of notesInfo){
            if(value.id == req.params.id){

                var i = notesInfo.indexOf(value);
                notesInfo.splice(i, 1);

                for (var i = 0; i < notesInfo.length; i++) {
                    notesInfo[i].id = i + 1;
                }

                fs.writeFile("./db/db.json", JSON.stringify(notesInfo), function(err){
                    if (err) throw err;
                })

                res.json(true);
            }
        }
    })
}