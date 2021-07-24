// questions will be displayed on array object
const questions = [
    {
        id: '1',
        question: 'Quest1',
    },
    {
        id: '2',
        question: 'Quest2',
    },
    {
        id: '3',
        question: 'Quest3',
    },
]
const choices = [
    {
        id: '1',
        answer: 'Choice1',
        questionid: '1',
    },
    {
        id: '2',
        answer: 'Choice2',
        questionid: '1',
    },
    {
        id: '3',
        answer: 'Choice3',
        questionid: '1',
    },
]

let startSection = document.querySelector(".start-section");

let quizSection = document.querySelector(".quiz-section");
document.querySelector("#start-button").addEventListener("click", function () {
    startSection.style.display = "none";
    quizSection.style.display = "block";
});


let choicesSection=document.querySelector(".choices-section");