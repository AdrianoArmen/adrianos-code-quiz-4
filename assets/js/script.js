// questions will be displayed on array object
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
]
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
]

// Declarating variables
var countDown = 60;
var questionNumber = 0;
var startSection = document.querySelector(".start-section");
var quizSection = document.querySelector(".quiz-section");
var choicesSection = document.querySelector(".choices-section");
var secondCounter = document.querySelector(".count-down");
var questionTitles = document.querySelector(".question-titles");
var questionsCompleted = false;
var score = 0;


secondCounter.textContent ="CountDown:" + countDown

document.querySelector("#start-button").addEventListener("click", function () {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    startQuiz();
    displayAnswerSection();
});


function displayAnswerSection(){
    clearAnswersSection();
    if (questionNumber<questions.length){
      questionNumber++
      var question = questions.find(getQuestion)
      var answers=getAnswers()
      questionsHeading.textContent = question.question
      createAnswers(answers)
      addAnswersEventListeners();
    }
    else{
      areAllAnswered=true
      createfinalScore();
    }
  }










function checkAnswer(e) {
    if (e.getAttribute("data-correct") === "true") {
        alert("correct answer")
    }
}

function clearAnswersSection() {
    if (answersSection.children.length > 0) {
        while (answersSection.firstChild) {
            answersSection.removeChild(answersSection.firstChild);
        }
    }
}


function startQuiz() {
    startTimer()
}

function startTimer() {
    timer = setInterval(function () {
        countDown--;
        secondCounter.textContent = countDown;
        if (countDown >= 0) {

        }
        if (countDown === 0) {
            clearInterval(timer);
            displayFinalScore();
        }
    }, 1000);
}

function displayAnswers() {
    function findQuestion(obj) {
        return obj.id === questionNumber;
    }

    var question = questions.find(findQuestion)

    questionTitles.textContent = question.question

    clearAnswersSection();

    var displayChoice = choices
        .filter(function (obj) {
            return obj.questionid === questionNumber;
        })
        .map(function (obj) {
            return obj
        })

    var length = displayChoice.length

    for (i = 0; i < length; i++) {
        var answerButton = document.createElement("input")
        choicesSection.appendChild(answerButton)
        answerButton.setAttribute("style", "margin: 10px;")
        answerButton.setAttribute("type", "button")
        answerButton.setAttribute("data-correct", displayChoice[i].correct)
        answerButton.setAttribute("class", "button")

        answerButton.value = i + 1 + ". " + displayChoice[i].answer
    }

    document.querySelectorAll('.button').forEach(item => {
        item.addEventListener('click', event => {
            displayAnswers();
            checkAnswer();
        })
    })
    questionNumber++;
}

function displayFinalScore(){
    questionTitles.textContent="Quiz completed!"
    clearAnswersSection();
    var finalScore = document.createElement("p")
    answersSection.appendChild(finalScore)
    finalScore.textContent="Your FinalScore is "
    questionNumber=1;
  }