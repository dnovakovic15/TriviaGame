let nodeQuestions = [];

//Create your Question Prototype aka Class
function Question(question, answer0, answer1, answer2, answer3, correctAnswer){
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

let question0 = new Question(
    "Choose the answer than best describes Node.js.",
    "Node is a multi-threaded synchrnous server framework.",
    "Node is a single-threaded synchrnous server framework.",
    "Node is a single-threaded asynchrnous server framework.",
    "Node is a multi-threaded asynchrnous server framework."
);

let question1 = new Question(
    "What is the easiest way to correctly use the http module in Node.js?",
    "let http = import('http');",
    "let http = require('http');",
    "Type in npm install http while in my working directory, and then use the second solution.",
    "Type in npm install http while in my working directory, and then use the first solution."
);

let question2 = new Question(
    "Given test.js contaings ONLY: process.stdout.write(process.argv[0]+process.argv[1]+process.argv[2]);. What will node test.js 'Hello World' output?",
    "Location of node.js + test.js location + Hello World ",
    "test.js location + Location of node.js + Hello World",
    "Hello World undefined undefined",
    "process is not defined"
);

let question3 = new Question(
    "Choose the answer than best describes Node.js",
    "Node runs on a browswer.",
    "Node runs on a Java Virtual Machine",
    "Node runs on a v8 virtual machine.",
    "Node runs in any enviroment."
);

let question4 = new Question(
    "Choose the answer than best describes globally installed dependencies in Node.js.",
    "Globally installed variables can be used in CLI, can be imported using require(), and are installed using -global flag.",
    "Globally installed variables can NOT be used in CLI, can NOT be imported using require(), and are installed using -global flag.",
    "Globally installed variables can be used in CLI, can be imported using require(), and are installed using -g flag.",
    "Globally installed variables can be used in CLI, can NOT be imported using require(), and are installed using -g flag."
);

nodeQuestions.push(question0, question1, question2, question3, question4);

