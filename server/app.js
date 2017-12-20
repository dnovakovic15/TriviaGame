'use strict';

let express = require('express');
let parser = require('body-parser');

let nodeQ = require('./questions/nodeQuestions.js');
let callbacksQ = require('./questions/callbacks.js');
let algorithmQ = require('./questions/algorithmQuestions.js');
let moreQ = require('./questions/more.js');
let prototypesQ = require('./questions/prototypes.js');
let scopingQ = require('./questions/scoping.js');
let terminalQ = require('./questions/terminalQuestions.js');

let app = express();
let port = 3000;

app.get('/', function(req, res){
    console.log('Unit Testing');
    res.send('Unit Testing');
})

app.get('/:topic/:question', function(req, res){
    'use strict';
    let question = 'default';

    switch(req.params.topic){
        case('node'):
            question = nodeQ[req.params.question];
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

    res.send(question);

});

app.listen(port);

module.exports = app;