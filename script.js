// first get all IDs then create funs[1] and funs for deleting classes[2] - adding scores[3].
let startButton = document.getElementById("starting-button");
let questionSpan = document.getElementById("question-span");
let scoreSpan = document.getElementById("score-span");
let questionPlace = document.getElementById("questionPlace");
let startScreen = document.querySelector(".start-screen");
let questionScreen = document.querySelector(".question-screen");
let resultsDiv = document.querySelector(".results-div");
let answersContainer = document.getElementById("answers");
let progressBar = document.getElementById("progress-bar");
let resultsSpan = document.getElementById("results-scored-span");
let resultMsg = document.getElementById("result-msg");
let restartQuizButton = document.getElementById("restart-quiz");
let totalQuestionSpan = document.getElementById("totalQuestionSpan");
let resultScreen = document.querySelector(".resultsScreen");
let scoreSpanMax = document.getElementById("maxScoreResults");

// questions
const quizQuestions = [
  {
    question: "Which language is primarily used to style web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },

  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
    ],
  },

  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
      { text: "Italy", correct: false },
      { text: "France", correct: true },
      { text: "Spain", correct: false },
      { text: "Germany", correct: false },
    ],
  },

  {
    question: "What is 12 × 8?",
    answers: [
      { text: "86", correct: false },
      { text: "96", correct: true },
      { text: "108", correct: false },
      { text: "88", correct: false },
    ],
  },

  {
    question: "Which programming language was created by Guido van Rossum?",
    answers: [
      { text: "Java", correct: false },
      { text: "C++", correct: false },
      { text: "Python", correct: true },
      { text: "Ruby", correct: false },
    ],
  },

  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "African Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Polar Bear", correct: false },
    ],
  },

  {
    question: "Which gas do humans need to breathe to survive?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },

  {
    question: "Which country has the largest population in the world?",
    answers: [
      { text: "United States", correct: false },
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "Brazil", correct: false },
    ],
  },

  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Program Utility", correct: false },
      { text: "Computer Processing Utility", correct: false },
    ],
  },

  {
    question: "How many sides does a hexagon have?",
    answers: [
      { text: "Five", correct: false },
      { text: "Six", correct: true },
      { text: "Seven", correct: false },
      { text: "Eight", correct: false },
    ],
  },

  {
    question: "Which ocean is the smallest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
      { text: "Pacific Ocean", correct: false },
    ],
  },

  {
    question: "Which organ pumps blood around the human body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false },
    ],
  },

  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },

  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0°C", correct: true },
      { text: "10°C", correct: false },
      { text: "32°C", correct: false },
      { text: "-10°C", correct: false },
    ],
  },

  {
    question: "Which data structure follows the FIFO principle?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
  },
];
// set vars;
let answerDis = false;
let score = 0;
// currentQuestionindex
let currentQuestionIndex = 0; // wichtig
totalQuestionSpan.textContent = quizQuestions.length;
scoreSpanMax.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // resetting vars
  score = 0;
  scoreSpan.textContent = score;
  answerDis = false;
  currentQuestionIndex = 0;
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");
  // create a fun showQuestion;
  showQuestion();
}

function showQuestion() {
  answerDis = false;
  let currentQuestion = quizQuestions[currentQuestionIndex];
  questionSpan.textContent = currentQuestionIndex + 1;

  answersContainer.innerHTML = "";
  questionPlace.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.textContent = answer.text;
    answersContainer.appendChild(button);
    button.addEventListener("click", answersFun);

    function answersFun(n) {
      if (answerDis) return;
      answerDis = true;
      let selectedBtn = n.target;
      let isCorrect = selectedBtn.dataset.correct === "true";

      Array.from(answersContainer.children).forEach((nn) => {
        if (nn.dataset.correct === "true") {
          nn.classList.add("correct");
        } else if (nn === selectedBtn) {
          nn.classList.add("incorrect");
        }
      });

      if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
      }

      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          showQuestion();
        } else {
          showResults();
        }
      }, 820);
    }
  });
}

function showResults() {
  questionScreen.classList.remove("active");
  resultScreen.classList.add("active");
  restartQuizButton.addEventListener("click", restartQuiz);
  resultsSpan.textContent = score;

  // if statements for the score //
  if (score === 0) {
    resultMsg.textContent = "kys";
  } else if (score === 1) {
    resultMsg.textContent =
      "Vro... did you even try? You're absolutely cooked.";
  } else if (score === 2) {
    resultMsg.textContent = "Nah son, this ain't it. Massive skill issue.";
  } else if (score === 3) {
    resultMsg.textContent = "An autistc kid is way smarter than ts.";
  } else if (score === 4) {
    resultMsg.textContent =
      "You really thought you did something there, huh lil bro?";
  } else if (score === 5) {
    resultMsg.textContent = "Get gud son. Start looksmaxxing that brain.";
  } else if (score === 6) {
    resultMsg.textContent = "Bro is allergic to knowing common things.";
  } else if (score === 7) {
    resultMsg.textContent = "Nah mid.";
  } else if (score === 8) {
    resultMsg.textContent = "Hi lol";
  } else if (score === 9) {
    resultMsg.textContent = "More questions and you're still stupid";
  } else if (score === 10) {
    resultMsg.textContent = "10 is 10";
  } else if (score === 11) {
    resultMsg.textContent = "Good job i guess.";
  } else if (score === 12) {
    resultMsg.textContent =
      "Lowkey not bad, son but what are you trying to tell us by scoring 12...";
  } else if (score === 13) {
    resultMsg.textContent = "I wonder why did you score 13...";
  } else if (score === 14) {
    resultMsg.textContent = "KYS";
  } else if (score === 15) {
    resultMsg.textContent = "Bro is cooking with straight gas now! 🗣️🔥";
  }
  // ----------------------- //
}

function restartQuiz() {
  // a challenge every time the quiz restarts change the first question
  score = 0;
  resultScreen.classList.remove("active");
  startQuiz();
}
