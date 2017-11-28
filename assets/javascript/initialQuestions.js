let initialQuestions = [];

//Create your Question Prototype aka Class
function Question(question, answer0, answer1, answer2, answer3, correctAnswer){
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

let q0 = new Question("What will console.log print in the following code:", "undefined", "null", "Too Heavy", "light", 3);
let q1 = new Question("How would you find the length of an array named array?","array.getLength()", "array.size", "array.length", "You MUST create your own function which determines the length of the array", 2);
let q2 = new Question("How would you include JavaScript into an HTML file","Adding <> with script inside of it", "HTML.addJavaScript", "HTML.Script()", "HTML.IForgot()", 0);
let q3 = new Question("Which one of these is true?","A class is big and a prototype is small", "There is no difference between a prototype and a Class", "Prototypes inherit their parents fields while Classes do not", "When creating an object a Class can be thought of as a blueprint for the object, while a prototype can be thought of as an object that will be copied", 3);
let q4 = new Question("What is the Difference Between == and === in JavaScript?","Nothing!", "== assigns a value to a letaible while === checks equality", "== is type independant === is type dependant", "What is JavaScript?", 2);

initialQuestions.push(q0, q1, q2, q3, q4);

