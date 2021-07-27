// Question and Answer Choices Array
const questions = [
    {
        id: 1,
        question: "What company developed JavaScript?",
    },
    {
        id: 2,
        question: "What does the NaN stands for in JavaScript?",
    },
    {
        id: 3,
        question: "What type of language is JavaScript?",
    },
    {
        id: 4,
        question: "Which of these is not a valid data type?",
    },
    {
        id: 5,
        question: "Wich of this options is not a valid looping structure?",
    },
    {
        id: 6,
        question: "Which of these are valid JavaScript data type?",
    },
    {
        id: 7,
        question: "Which one of the following is an ternary operator?",
    },
    {
        id: 8,
        question: "What is the first index of an array?",
    },
    {
        id: 9,
        question: "When was JavaScript created?",
    },
    {
        id: 10,
        question: "How do you add a comment in a JavaScript?",
    },
]

// answer array with 3 choices per each question - linked by questionid
const choices = [
    {
        id: "1",
        answer: "Netscape",
        questionid: 1,
        correct: "true",
    },
    {
        id: "2",
        answer: "JS Inc",
        questionid: 1,
        correct: "false",
    },
    {
        id: "3",
        answer: "Facebook",
        questionid: 1,
        correct: "false",
    },
    {
        id: "4",
        answer: "Not a Number",
        questionid: 2,
        correct: "true",
    },
    {
        id: "5",
        answer: "New Array Number",
        questionid: 2,
        correct: "false",
    },
    {
        id: "6",
        answer: "Null Action Name",
        questionid: 2,
        correct: "false",
    },
    {
        id: "7",
        answer: "Object-based",
        questionid: 3,
        correct: "true",
    },
    {
        id: "8",
        answer: "Markup",
        questionid: 3,
        correct: "false",
    },
    {
        id: "9",
        answer: "Assembly",
        questionid: 3,
        correct: "false",
    },
    {
        id: "10",
        answer: "Alerts",
        questionid: 4,
        correct: "true",
    },
    {
        id: "11",
        answer: "Strings",
        questionid: 4,
        correct: "false",
    },
    {
        id: "12",
        answer: "Boolean",
        questionid: 4,
        correct: "false",
    },
    {
        id: "13",
        answer: "Spin",
        questionid: 5,
        correct: "true",
    },
    {
        id: "14",
        answer: "For",
        questionid: 5,
        correct: "false",
    },
    {
        id: "15",
        answer: "While",
        questionid: 5,
        correct: "false",
    },
    {
        id: "16",
        answer: "Boolean",
        questionid: 6,
        correct: "false",
    },
    {
        id: "17",
        answer: "String",
        questionid: 6,
        correct: "false",
    },
    {
        id: "18",
        answer: "Both",
        questionid: 6,
        correct: "true",
    },
    {
        id: "19",
        answer: "!=",
        questionid: 7,
        correct: "false",
    },
    {
        id: "20",
        answer: "?",
        questionid: 7,
        correct: "true",
    },
    {
        id: "21",
        answer: "==",
        questionid: 7,
        correct: "false",
    },
    {
        id: "22",
        answer: "1",
        questionid: 8,
        correct: "false",
    },
    {
        id: "23",
        answer: "first",
        questionid: 8,
        correct: "false",
    },
    {
        id: "24",
        answer: "0",
        questionid: 8,
        correct: "true",
    },
    {
        id: "25",
        answer: "September 1995",
        questionid: 9,
        correct: "true",
    },
    {
        id: "26",
        answer: "Early 2000s",
        questionid: 9,
        correct: "false",
    },
    {
        id: "27",
        answer: "1989",
        questionid: 9,
        correct: "false",
    },
    {
        id: "28",
        answer: "<!--text-->",
        questionid: 10,
        correct: "false",
    },
    {
        id: "29",
        answer: "!!text",
        questionid: 10,
        correct: "false",
    },
    {
        id: "30",
        answer: "//text",
        questionid: 10,
        correct: "true",
    },
]

// Variable Declaration
var countDown = 60;
var questionNumber = 1;
var startSection = document.querySelector(".start-section");
var quizSection = document.querySelector(".quiz-section");
var choicesSection = document.querySelector(".choices-section");
var secondCounter = document.querySelector(".count-down");
var questionTitles = document.querySelector(".question-titles");
var scoresSection = document.querySelector(".scores-section");

var myChoice = document.createElement("p")
var hr = document.createElement("hr")

scoresSection.appendChild(hr)
scoresSection.appendChild(myChoice)

// Initial Values for Variables
var questionsCompleted = false;
var score = 0;
var questionCounter = questions.length;


secondCounter.textContent = "CountDown:" + countDown


function start() {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    startQuiz();
    displayAnswerSection();
}
document.querySelector("#start-button").addEventListener("click", function () {
    start()
})

// display questions and multiple choice functionality
function displayAnswerSection() {
    clearAnswersSection();
    if (questionNumber <= questions.length) {

        var question = questions.find(getQuestion)
        var answers = getAnswers()
        questionTitles.textContent = question.question
        displayAnswers(answers)
        addAnswerListener();
        questionNumber++
    }
    else {
        questionsCompleted = true
        displayFinalScore();
    }
}

function displayAnswers(answers) {
    var length = answers.length
    for (i = 0; i < length; i++) {
        var answerButton = document.createElement("input")
        choicesSection.appendChild(answerButton)
        answerButton.setAttribute("class", "answer")
        answerButton.setAttribute("style", "margin: 10px;")
        answerButton.setAttribute("data-correct", answers[i].correct)
        answerButton.setAttribute("type", "button")
        answerButton.setAttribute("style", "margin: 5px; padding: 5px; background-color: rgb(255, 204, 0); width: 75%;")
        answerButton.value = i + 1 + ". " + answers[i].answer
    }
}

function addAnswerListener() {
    document.querySelectorAll('.answer').forEach(item => {
        item.addEventListener('click', event => {
            checkAnswer(item);
            displayAnswerSection();
        })
    })
}

// conditional for right and wrong choices - penalty to timer
function checkAnswer(e) {
    scoresSection.setAttribute("style", "opacity: 1; visibility: visible; -webkit-transition: none; -moz-transition: none; -o-transition: none;")

    if (e.getAttribute("data-correct") === "true") {
        myChoice.textContent = "CorrectAnswer!"
        score++;
    }
    else {
        countDown -= 10;
        myChoice.textContent = "WrongAnswer!"
    }

    // smooth transitions for choices notifications
    var waitNext = 1;

    wait = setInterval(function () {
        waitNext--;

        if (waitNext >= 0) {
            scoresSection.setAttribute("style", "opacity: 0; visibility: hidden; -webkit-transition: visibility 3s linear, opacity 3s linear; -moz-transition: visibility 3s linear, opacity 2s linear; -o-transition: visibility 3s linear, opacity 3s linear;")
        }

        if (timerCount === 0) {

            clearInterval(timer);
        }

    }, 0);
}


function clearAnswersSection() {
    if (choicesSection.children.length > 0) {
        while (choicesSection.firstChild) {
            choicesSection.removeChild(choicesSection.firstChild);
        }
    }
}


function startQuiz() {
    questionsCompleted = false;
    startTimer()
}

// count down functionality and conditionals to finish the game and display scores
function startTimer() {
    timer = setInterval(function () {
        countDown--;
        secondCounter.textContent = "CountDown:" + countDown;
        if (countDown >= 0) {
            if (questionsCompleted && countDown > 0) {

                clearInterval(timer);
                displayFinalScore();
            }
        }
        if (countDown === 0) {

            clearInterval(timer);
            displayFinalScore();
        }
    }, 1000);
}


// display scores and intials form functionality
function displayFinalScore() {
    questionTitles.textContent = "Quiz completed!"
    clearAnswersSection();
    var finalScore = document.createElement("p")

    var submitScore = document.createElement("form");


    submitScore.setAttribute('id', "submit-form");

    var label = document.createElement("Label");
    label.htmlFor = "score";
    label.innerHTML = "Enter Initials:";
    var initials = document.createElement("input");
    initials.setAttribute('type', "text");
    initials.setAttribute('name', "initials");

    var submit = document.createElement("input");
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "Submit");
    submit.setAttribute("style", "margin: 5px; padding: 10px; background-color: rgb(255, 204, 0);")

    submitScore.appendChild(label);
    submitScore.appendChild(initials);
    submitScore.appendChild(submit);

    choicesSection.appendChild(finalScore)
    finalScore.textContent = "Your FinalScore is " +score+ "/" + questionCounter
    choicesSection.appendChild(submitScore)
    addFormListener();
    questionNumber = 1;
}

// retrieve corresponding question and choices by questionid
function getQuestion(obj) {
    return obj.id === questionNumber;
}

function getAnswers() {
    var displayChoice = choices.filter(function (obj) {
        return obj.questionid === questionNumber;
    })
        .map(function (obj) {
            return obj
        })
    return displayChoice;
}

// highscores section saved in local storage - ordered by highest score
function displayHighScores() {
    questionTitles.textContent = "HighScores!"
    clearAnswersSection();

    var highScore = document.createElement("div");
    var goBack = document.createElement("button");
    goBack.setAttribute("style", "margin: 5px; padding: 10px; background-color: rgb(255, 204, 0);")
    var clearHighScores = document.createElement("button");
    highScore.setAttribute('id', "high-scores");
    clearHighScores.setAttribute("style", "margin: 5px; padding: 10px; background-color: rgb(255, 204, 0);")

    var keysArray = Object.keys(localStorage);
    var valuesArray = Object.values(localStorage);

    var localstorage = {};
    for (var i = 0; i < localStorage.length; i++) {
        localstorage[keysArray[i]] = valuesArray[i]
    }

    var storageOrder = [];
    for (var item in localstorage) {
        storageOrder.push([item, localstorage[item]]);
    }

    storageOrder.sort(function (a, b) {
        return b[1] - a[1];
    });

    var scorePosition = 1

    for (var i = 0; i < storageOrder.length; i++) {
        var parr = document.createElement("p");
        highScore.appendChild(parr)
        parr.textContent = scorePosition + ". " + storageOrder[i][0] + "-" + storageOrder[i][1]
        scorePosition++
    }

    goBack.setAttribute('type', "button");
    goBack.setAttribute('name', "go-back");
    goBack.setAttribute('id', "goback");
    goBack.textContent = "Go Back";

    clearHighScores.setAttribute('type', "button");
    clearHighScores.setAttribute('name', "clear-high-scores");
    clearHighScores.setAttribute('id', "clearhighscores");
    clearHighScores.textContent = "Clear Highscores";

    choicesSection.appendChild(highScore)
    choicesSection.appendChild(goBack)
    choicesSection.appendChild(clearHighScores)

    goBackListener()
    clearHighScoresListener(highScore)
}


// event listeners for buttons and form
function addFormListener() {
    document.querySelectorAll('#submit-form').forEach(item => {
        item.addEventListener('submit', event => {
            handleFormSubmit(event, item);
        })
    })
}

function goBackListener() {
    document.querySelectorAll('#goback').forEach(item => {
        item.addEventListener('click', event => {
            location.reload();
        })
    })
}

function clearHighScoresListener(highScore) {
    document.querySelectorAll('#clearhighscores').forEach(item => {
        item.addEventListener('click', event => {
            localStorage.clear();
            clearScores(highScore);
        })
    })
}

function handleFormSubmit(event, item) {

    event.preventDefault();
    localStorage.setItem(item.initials.value, score);
    displayHighScores()
}

function clearScores(highScore) {
    if (highScore.children.length > 0) {
        while (highScore.firstChild) {
            highScore.removeChild(highScore.firstChild);
        }
    }
}

document.querySelector(".view-hihgscores").addEventListener("click", function () {
    startSection.style.display = "none"
    quizSection.style.display = "block"
    displayHighScores()
});