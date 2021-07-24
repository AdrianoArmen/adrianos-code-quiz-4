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
let countDown = 60;

let startSection = document.querySelector(".start-section");

let quizSection = document.querySelector(".quiz-section");
document.querySelector("#start-button").addEventListener("click", function () {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    startQuiz();
    displayAnswers();
});


let choicesSection = document.querySelector(".choices-section");

let secondCounter = document.querySelector(".count-down");
secondCounter.textContent = countDown

let questionTitles = document.querySelector(".question-titles");

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

        }
    }, 1000);
}

function displayAnswers() {
    function findQuestion(obj) {
        return obj.id === 1;
    }

    var question = questions.find(findQuestion)

    questionTitles.textContent = question.question

    let displayChoice = choices
        .filter(function (obj) {
            return obj.questionid === 1;
        })
        .map(function (obj) {
            return obj
        })

    let length = displayChoice.length

    for (i = 0; i < length; i++) {
        var answerButton = document.createElement("input")
        choicesSection.appendChild(answerButton)
        answerButton.setAttribute("style", "margin: 10px;")
        answerButton.setAttribute("type", "button")
        answerButton.setAttribute("data-index", i)
        answerButton.setAttribute("class", "button")

        answerButton.value = i + 1 + ". " + displayChoice[i].answer
    }

    document.querySelectorAll('.button').forEach(item => {
        item.addEventListener('click', event => {      
          displayAnswers();
        })
      })
}