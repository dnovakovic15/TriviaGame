let path = require('path');
let nodeQ = require('../questions/nodeQuestions.js');
let algoQ = require('../questions/algorithmQuestions.js');
let callbacksQ = require('../questions/callbacks.js');
let moreQ = require('../questions/more.js');
let prototypeQ = require('../questions/prototypes.js');
let scopingQ = require('../questions/scoping.js');
let terminalQ = require('../questions/terminalQuestions.js');


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
                res.send(algoQ);
                break;
            case('terminal'):
                res.send(terminalQ);
                break;
            case('callbacks'):
                res.send(callbacksQ);
                break;
            case('more'):
                res.send(moreQ);
                break;
            case('prototypes'):
                res.send(prototypeQ);
                break;     
            case('scoping'):
                res.send(scopingQ);
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