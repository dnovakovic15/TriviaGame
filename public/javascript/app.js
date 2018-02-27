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

//Initialize as JS Questions
$('#header-image').attr('src', '../images/js.jpeg');
$('body').css('background-image', 'linear-gradient(to top, #ffd61f 0%, #ffd61f 100%)');
$('.sub-buttons').css('display', 'flex');
$.ajax({url: "http://localhost:3000/prototypes/0", success: function(result){
    clearInterval(timer);
    animatedQ = true;
    topicState = 'prototypes';
    questionArray = result;
    imageLocation = 'prototypes';
    askQuestion(questionArray, 'prototypes')
}});

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
        let imageString = 'images/' + imageLocation +'/q' + questionIndex + '.png';
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
    $('#header-image').attr('src', '../images/node0.png');
    $('body').css('background-image', 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)');
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
    $('#header-image').attr('src', '../images/algo.jpeg');
    $('body').css('background-image', 'linear-gradient(to top, #298505 0%, #1b5e03 100%)');
    $.ajax({url: "http://localhost:3000/algorithms/0", success: function(result){
        clearInterval(timer);
        $('.sub-buttons').css('display', 'none');
        $('#q-image').css('display', 'none');
        animatedQ = false;
        topicState = 'algorithms';
        questionArray = result;
        askQuestion(questionArray, 'none');
    }});
});

$('#terminal').on('click', function(){
    $('#header-image').attr('src', '../images/terminal.jpeg');
    $('body').css('background-image', 'linear-gradient(to top, #000000 0%, #000000 100%)');
    $.ajax({url: "http://localhost:3000/terminal/0", success: function(result){
        clearInterval(timer);
        $('.sub-buttons').css('display', 'none');
        $('#q-image').css('display', 'none');
        animatedQ = false;
        topicState = 'terminal';
        questionArray = result;
        askQuestion(questionArray, 'none')
    }});
});

$('#javascript').on('click', function(){
    $('#header-image').attr('src', '../images/js.jpeg');
    $('body').css('background-image', 'linear-gradient(to top, #ffd61f 0%, #ffd61f 100%)');
    $('.sub-buttons').css('display', 'flex');
});

$('#prototypes').on('click', function(){
    $.ajax({url: "http://localhost:3000/prototypes/0", success: function(result){
        clearInterval(timer);
        animatedQ = true;
        topicState = 'prototypes';
        questionArray = result;
        imageLocation = 'prototypes';
        askQuestion(questionArray, 'prototypes')
    }});
});

$('#scoping').on('click', function(){
    $.ajax({url: "http://localhost:3000/scoping/0", success: function(result){
        clearInterval(timer);
        animatedQ = true;
        questionArray = result;
        topicState = 'scoping';
        imageLocation = 'scoping';
        askQuestion(questionArray, 'scoping');
    }});
});

$('#callbacks').on('click', function(){
    $.ajax({url: "http://localhost:3000/callbacks/0", success: function(result){
        clearInterval(timer);
        animatedQ = true;
        topicState = 'callbacks';
        questionArray = result;
        imageLocation = 'callbacks';
        askQuestion(questionArray, 'callbacks')
    }});
});

$('#more').on('click', function(){
    $.ajax({url: "http://localhost:3000/more/0", success: function(result){
        clearInterval(timer);
        animatedQ = true;
        topicState = 'more';
        questionArray = result;
        imageLocation = 'more';
        askQuestion(questionArray, 'more')
    }});
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
