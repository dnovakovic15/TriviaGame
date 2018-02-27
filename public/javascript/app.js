//Initialize variables
let questionArray = [];
let questionIndex = 0;
let timeLeft = 60;
let wrong = 0;
let right = 0;
let animatedQ;
let imageLocation;
let timer;
let topicState;


//Start timer. Note the clear interval.
function askQuestion(questionArray, imageLocation){
    $('#answers').css('visibility', 'visible');

    if(questionIndex >= questionArray.length){
        $(".0").css("opacity", "0");
        $(".1").css("opacity", "0");
        $(".2").css("opacity", "0");
        $(".3").css("opacity", "0");
        $(".question").html("You got " + right + " right out of 5 questions!");

        let resetButton = $("<button>Restart</button>");
        resetButton.addClass("reset");
        $(".content").append(resetButton);

        $(".reset").on("click", function(){
            restart();
        })

    }
    else{
        callQuestion(questionArray, questionIndex, imageLocation);
        timeLeft = 60;
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
function callQuestion(questionArray, questionIndex, imageLocation){
    // $.get(topicState + "/" + questionIndex, function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });

    $(".question").html(questionArray[questionIndex].question);
    $(".0").html(questionArray[questionIndex].answer0);
    $(".1").html(questionArray[questionIndex].answer1);
    $(".2").html(questionArray[questionIndex].answer2);
    $(".3").html(questionArray[questionIndex].answer3);

    if(animatedQ){
        let imageString = 'assets/images/' + imageLocation +'/q' + questionIndex + '.png';
        $("#q-image").attr('src', imageString);
        $('#q-image').css('display', 'block');
    }
}

function outOfTime(){
    console.log("Run out of time!");
}

function correct(imageLocation){
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
        askQuestion(questionArray, imageLocation);
        $(".advance").remove();
    }, 0);
}

function wrongAnswer(imageLocation){
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
        askQuestion(questionArray, imageLocation);
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
    askQuestion(questionArray);
    $(".reset").remove();
}

//Topic Button Handlers

$('#node').on('click', function(){
    console.log('node');
    $.ajax({url: "http://localhost:3000/node/0", success: function(result){
        clearInterval(timer);
        $('.sub-buttons').css('display', 'none');
        $('#q-image').css('display', 'none');
        animatedQ = false;
        topicState = 'node';
        questionArray = result;
        askQuestion(questionArray, 'none')
    }});
});

$('#algorithms').on('click', function(){
    clearInterval(timer);
    $('.sub-buttons').css('display', 'none');
    $('#q-image').css('display', 'none');
    animatedQ = false;
    topicState = 'algorithms';
    questionArray = algorithmQuestions;
    askQuestion(questionArray, 'none')
});

$('#terminal').on('click', function(){
    clearInterval(timer);
    $('.sub-buttons').css('display', 'none');
    $('#q-image').css('display', 'none');
    animatedQ = false;
    topicState = 'terminal';
    questionArray = terminalQuestions;
    askQuestion(questionArray, 'none')
});

$('#javascript').on('click', function(){
    $('.sub-buttons').css('display', 'flex');
});

$('#prototypes').on('click', function(){
    clearInterval(timer);
    animatedQ = true;
    topicState = 'prototypes';
    questionArray = prototypeQuestions;
    imageLocation = 'prototypes';
    askQuestion(questionArray, 'prototypes')
});

$('#scoping').on('click', function(){
    clearInterval(timer);
    animatedQ = true;
    questionArray = scopingQuestions;
    topicState = 'scoping';
    imageLocation = 'scoping';
    askQuestion(questionArray, 'scoping')
});

$('#callbacks').on('click', function(){
    clearInterval(timer);
    animatedQ = true;
    topicState = 'callbacks';
    questionArray = callbacksQuestions;
    imageLocation = 'callbacks';
    askQuestion(questionArray, 'callbacks')
});

$('#more').on('click', function(){
    clearInterval(timer);
    animatedQ = true;
    topicState = 'more';
    questionArray = moreQuestions;
    imageLocation = 'more';
    askQuestion(questionArray, 'more')
});


//Answer Button handlers

$(".0").on("click", function(){
    clearInterval(timer);

    //I compare correct answer to 0 because this button is the first button. I.E. the 0th button.
    if(questionArray[questionIndex].correctAnswer == 0){
        correct(imageLocation);
    }
    else{
        wrongAnswer(imageLocation);
    }
})
$(".1").on("click", function(){
    clearInterval(timer);

    //I compare correct answer to 1 because this button is the second button. I.E. the 1st button.
    if(questionArray[questionIndex].correctAnswer == 1){
        correct(imageLocation);
    }
    else{
        wrongAnswer(imageLocation);
    }
})
$(".2").on("click", function(){
    clearInterval(timer);
    console.log(questionArray[questionIndex].correctAnswer);
    if(questionArray[questionIndex].correctAnswer == 2){
        correct(imageLocation);
    }
    else{
        wrongAnswer(imageLocation);
    }
})
$(".3").on("click", function(){
    clearInterval(timer);
    if(questionArray[questionIndex].correctAnswer == 3){
        correct(imageLocation);
    }
    else{
        wrongAnswer(imageLocation);
    }
})
