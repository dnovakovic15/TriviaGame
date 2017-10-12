//Initialize variables
var questionArray = [];
var questionIndex = 0;
var timeLeft = 60;
var timer;
var wrong = 0;
var right = 0;

//Create your Question Prototype aka Class
function Question(question, answer0, answer1, answer2, answer3, correctAnswer){
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

//Create new questions. I only made two so far
var question0 = new Question("What is the Difference Between == and === in JavaScript?","Nothing!", "== assigns a value to a varaible while === checks equality", "== is type independant === is type dependant", "What is JavaScript?", 2);
var question1 = new Question("How would you find the length of an array named array?","array.getLength()", "array.size", "array.length", "You MUST create your own function which determines the length of the array", 2);
var question2 = new Question("How would you include JavaScript into an HTML file","Adding <> with script inside of it", "HTML.addJavaScript", "HTML.Script()", "HTML.IForgot()", 0);
var question3 = new Question("Which one of these is true?","A class is big and a prototype is small", "There is no difference between a prototype and a Class", "Prototypes inherit their parents fields while Classes do not", "When creating an object a Class can be thought of as a blueprint for the object, while a prototype can be thought of as an object that will be copied", 3);
var question4 = new Question("Who killed Littlefinger","Peter Baylish", "Jon Snow", "Sansa Stark", "Arya Stark", 3);

//add the questions to the array
questionArray.push(question0, question1, question2, question3, question4);

//Start everything when document is ready.
$(document).ready(function(){
    askQuestion();
});

//Start timer. Note the clear interval.
function askQuestion(){
    if(questionIndex >= questionArray.length){
        $(".0").css("opacity", "0");
        $(".1").css("opacity", "0");
        $(".2").css("opacity", "0");
        $(".3").css("opacity", "0");
        $(".question").html("You got " + right + " right out of 5 questions!");

        var resetButton = $("<button>Restart</button>");
        resetButton.addClass("reset");
        $(".content").append(resetButton);

        $(".reset").on("click", function(){
            restart();
        })

    }
    else{
        callQuestion(questionIndex);
        timer = setInterval(function(){
            $(".time").html("Time Remaining: " + (--timeLeft) + " Seconds");
            console.log("test");

            if(timeLeft <= 0){
                clearInterval(timer);
                wrongAnswer();
            }
        }, 1000);
    }
}

//Populate DOM, aka HTML, with the current question. Not questionIndex is used to determine what question we are on.
function callQuestion(questionIndex){
    $(".question").html(questionArray[questionIndex].question);
    $(".0").html(questionArray[questionIndex].answer0);
    $(".1").html(questionArray[questionIndex].answer1);
    $(".2").html(questionArray[questionIndex].answer2);
    $(".3").html(questionArray[questionIndex].answer3);
}

function outOfTime(){
    console.log("Run out of time!");
}

//button handlers
$(".0").on("click", function(){
    clearInterval(timer);

    //I compare correct answer to 0 because this button is the first button. I.E. the 0th button.
    if(questionArray[questionIndex].correctAnswer == 0){
        correct();
    }
    else{
        wrongAnswer();
    }
})
$(".1").on("click", function(){
    clearInterval(timer);

    //I compare correct answer to 1 because this button is the second button. I.E. the 1st button.
    if(questionArray[questionIndex].correctAnswer == 1){
        correct();
    }
    else{
        wrongAnswer();
    }
})
$(".2").on("click", function(){
    clearInterval(timer);
    console.log(questionArray[questionIndex].correctAnswer);
    if(questionArray[questionIndex].correctAnswer == 2){
        correct();
    }
    else{
        wrongAnswer();
    }
})
$(".3").on("click", function(){
    clearInterval(timer);
    if(questionArray[questionIndex].correctAnswer == 3){
        correct();
    }
    else{
        wrongAnswer();
    }
})

function correct(){
    questionIndex++;
    right++;
    timeLeft = 60;
    $(".question").html("CORRECT!");
    $(".0").css("opacity", "0");
    $(".1").css("opacity", "0");
    $(".2").css("opacity", "0");
    $(".3").css("opacity", "0");

    setTimeout(function(){
        $(".0").css("opacity", "100");
        $(".1").css("opacity", "100");
        $(".2").css("opacity", "100");
        $(".3").css("opacity", "100");
        askQuestion();
        $(".advance").remove();
    }, 0);
}

function wrongAnswer(){
    questionIndex++;
    wrong++;
    timeLeft = 60;
    $(".question").html("Wrong!");
    $(".0").css("opacity", "0");
    $(".1").css("opacity", "0");
    $(".2").css("opacity", "0");
    $(".3").css("opacity", "0");

    setTimeout(function(){
        $(".0").css("opacity", "100");
        $(".1").css("opacity", "100");
        $(".2").css("opacity", "100");
        $(".3").css("opacity", "100");
        askQuestion();
        $(".advance").remove();
    }, 0);
}

function restart(){
    questionIndex = 0;
    timeLeft = 60;
    wrong = 0;
    right = 0;
    $(".0").css("opacity", "100");
    $(".1").css("opacity", "100");
    $(".2").css("opacity", "100");
    $(".3").css("opacity", "100");
    askQuestion();
    $(".reset").remove();
}

