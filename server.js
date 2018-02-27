'use strict';
let controller = require('./controllers/quiz_controller.js');
let express = require('express');
let bodyParser = require('body-parser');

// let nodeQ = require('./questions/nodeQuestions.js');
// let callbacksQ = require('./questions/callbacks.js');
// let algorithmQ = require('./questions/algorithmQuestions.js');
// let moreQ = require('./questions/more.js');
// let prototypesQ = require('./questions/prototypes.js');
// let scopingQ = require('./questions/scoping.js');
// let terminalQ = require('./questions/terminalQuestions.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/public'));

controller(app);

app.listen(port);

module.exports = app;
