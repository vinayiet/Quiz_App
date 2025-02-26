# JavaScript Quiz App

## Overview

This project is a simple and interactive JavaScript Quiz App. It demonstrates the use of HTML, CSS, and JavaScript to create a dynamic and user-friendly quiz application. The app includes features such as a progress bar, timer, and a congratulatory message for users who answer all questions correctly.

## Features

- **Dynamic Quiz Questions**: The quiz displays multiple questions with multiple-choice answers.
- **Progress Bar**: A visual progress bar that updates as the user progresses through the quiz.
- **Timer**: A countdown timer for each question to add a sense of urgency.
- **Next Button**: A "Next Question" button that allows users to move to the next question after submitting an answer.
- **Results Display**: Displays the number of correct answers at the end of the quiz.
- **Congratulatory Message**: A special message for users who answer all questions correctly.

## Technologies Used

- **HTML**: For structuring the content of the quiz app.
- **CSS**: For styling the quiz app and adding animations.
- **JavaScript**: For implementing the quiz logic, handling user interactions, and updating the UI dynamically.

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the `Quiz_App` directory.
3. Open the `index.html` file in your web browser.

## Code Highlights

### HTML

The HTML file sets up the structure of the quiz app, including the quiz container, progress bar, timer, and buttons.

```html
<!-- ...existing code... -->
<div class="quiz-container">
    <h1>JavaScript Quiz</h1>
    <div id="progress-bar"></div>
    <div id="timer">Time left: <span id="time">30</span>s</div>
    <div id="quiz"></div>
    <button id="submit">Submit Answer</button>
    <button id="next" style="display: none;">Next Question</button>
    <div id="results"></div>
</div>
<!-- ...existing code... -->
```

### CSS

The CSS file styles the quiz app, including the progress bar, timer, and buttons.

```css
/* ...existing code... */
#progress-bar {
    height: 5px;
    background: #4CAF50;
    width: 0;
    transition: width 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
}

#timer {
    margin-bottom: 20px;
    font-size: 18px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #45a049;
}

#results {
    margin-top: 20px;
    font-size: 18px;
    animation: fadeIn 1s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
/* ...existing code... */
```

### JavaScript

The JavaScript file handles the quiz logic, including displaying questions, updating the progress bar, managing the timer, and showing results.

```javascript
// ...existing code...
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
// ...existing code...
```

## Conclusion

This project showcases the ability to create a dynamic and interactive web application using HTML, CSS, and JavaScript. It demonstrates skills in DOM manipulation, event handling, and UI/UX design.
