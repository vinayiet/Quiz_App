const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const timerElement = document.getElementById('time');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        answers: {
            a: "Jeff Bezos",
            b: "Elon Musk",
            c: "Bill Gates"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Saturn"
        },
        correctAnswer: "b"
    },
    {
        question: "Which language is used for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "C++"
        },
        correctAnswer: "b"
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "HyperText Markup Language",
            b: "HyperText Machine Language",
            c: "HyperText and links Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "Which company developed JavaScript?",
        answers: {
            a: "Netscape",
            b: "Microsoft",
            c: "Google"
        },
        correctAnswer: "a"
    }
];

let currentQuestionIndex = 0;
let timeLeft = 30;
let timer;

function buildQuiz() {
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answers');
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
        answers[i].style.display = i === index ? 'block' : 'none';
    });
    updateProgressBar(index);
    resetTimer();
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
}

function updateProgressBar(index) {
    const progress = ((index + 1) / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function showResults() {
    clearInterval(timer);
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    if (numCorrect === quizQuestions.length) {
        resultsContainer.innerHTML = `Congratulations! You answered all questions correctly!`;
    } else {
        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

submitButton.addEventListener('click', () => {
    showResults();
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
});

nextButton.addEventListener('click', handleNextQuestion);

buildQuiz();
