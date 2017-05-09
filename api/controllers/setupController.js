var Todos = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos",function(req,res){
        //setup seed data
        var seedTodos = [
            {
                text: "Hoc Node.js",
                isDone: false
            },
            {
                text: "Hoc Angular.js",
                isDone: false
            },
            {
                text:"Viet mot ung dung hoan chinh",
                isDone: false
            }
        ];
        Todos.create(seedTodos, function(err, result){
            res.send(results);
        });
    });
}