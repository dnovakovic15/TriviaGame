let scopingQuestions = [];

//Create your Question scoping aka Class
function Question(question, answer0, answer1, answer2, answer3, correctAnswer){
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

let question0scoping = new Question(
    "What will the following code ouput: ",
    "O(0.5)",
    "O(n)",
    "O(logn)",
    "O(n^2)"
);

let question1scoping = new Question(
    "What will the following code ouput: ",
    "Checks if the values in test.txt are greater than the values in hello.txt.",
    "Appends the output of test.txt to hello.txt",
    "Appends the output of hello.txt to test.txt",
    "Writes the content of test.txt to test.txt overwriting existing data in hello.txt"
);

let question2scoping = new Question(
    "What will the following code ouput: ",
    "Creates a file named head.-3 in your current working directory.",
    "Prints the the first three files/programs in your current directory to a file name head.",
    "Prints the first three files/programs to your console.",
    "Nothing! It throws an error."
);

let question3scoping = new Question(
    "What will the following code ouput: ",
    "The contents of the standard input stream of app are fed to the standard output stream of GoT.",
    "The contents of the standard input stream of GoT are fed to the standard output stream of app.",
    "Nothing! Piping can only be used for text files.",
    "Prints all of contents of app to the scoping and then writes them to GoT"
);

let question4scoping = new Question(
    "What will the following code ouput: ",
    "Opens a file named cd.",
    "Nothing! The correct synax is cd .",
    "Nothing! You have to specify where to cd to.",
    "Changes the current working directory to its parent directory."
);

scopingQuestions.push(question0scoping, question1scoping, question2scoping, question3scoping, question4scoping);