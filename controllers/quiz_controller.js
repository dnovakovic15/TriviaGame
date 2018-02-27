let path = require('path');
let nodeQ = require('../questions/nodeQuestions.js')

function route(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/:topic/:question', function(req, res){
        'use strict';
        let question = 'default';

        switch(req.params.topic){
            case('node'):
                res.send(nodeQ);
                break;
            case('algorithms'):
                question = algorithmQ[req.params.question];
                console.log(req.params.topic);
                break;
            case('terminal'):
                question = terminalQ[req.params.question];
                break;
            case('callbacks'):
                question = callbacksQ[req.params.question];
                break;
            case('more'):
                question = moreQ[req.params.question];
                break;
            case('prototypes'):
                question = prototypesQ[req.params.question];
                break;     
            case('scoping'):
                question = scopingQ[req.params.question];
                break;     
        }
    })

    //     res.send(question);

    // });

    // app.post("/addBurger", function(req, res) {
    //     console.log(req.body.burger_name);
    //     burgers.insertOne(req.body.burger_name);
    // });

    // app.post("/devourBurger", function(req, res) {
    //     console.log(req.body.burger_name);
    //     burgers.updateOne(req.body.burger_name);
    // });
}

function cb(result, res){
    console.log(result[0].burger_name);
    res.render("index", {
        burgers: result,
    });
}

module.exports = route;