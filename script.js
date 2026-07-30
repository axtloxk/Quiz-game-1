// first get all IDs then create funs[1] and funs for deleting classes[2] - adding scores[3] and yk those stuff 
let startButton = document.getElementById('starting-button');
let questionSpan = document.getElementById('question-span'); 
let scoreSpan = document.getElementById('score-span');
let questionPlace = document.getElementById('questionPlace');
let startScreen = document.querySelector('.start-screen');
let questionScreen = document.querySelector('.question-screen'); 
let resultsDiv = document.querySelector('.results-div');
let answersContainer = document.getElementById('answers');
let progressBar = document.getElementById('progress-bar'); 
let resultsSpan = document.getElementById('results-scored-span');
let resultMsg = document.getElementById('result-msg');
let restartQuizButton = document.getElementById('restart-quiz');
let totalQuestionSpan = document.getElementById('totalQuestionSpan');
let resultScreen = document.querySelector('.resultsScreen');
let scoreSpanMax = document.getElementById('maxScoreResults');

// questions 
const quizQuestions = [
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Shibuya", correct: false },
      { text: "Berlin", correct: false },
      { text: "James Lee", correct: false },
      { text: "Tokyo", correct: true },
    ],
  },
  {
    question: "At less than 1 square kilometer, what is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Malta", correct: false },
    ],
  },
  {
    question: "What is the longest thing on Earth?",
    answers: [
      { text: "Wifi's range", correct: false },
      { text: "Radar range", correct: false },
      { text: "Burj Khalifa", correct: false },
      { text: "Hercules wall", correct: true }, 
    ],
  },
  {
    question: 'What does "IQ" stand for?',
    answers: [
      { text: "Interaction Quickness", correct: false },
      { text: "Important Quality", correct: false },
      { text: "Intelligence Quotient", correct: true },
      { text: "Intelligent Question", correct: false },
    ],
  },
  {
    question: "What is the name of the science that studies plants?",
    answers: [
      { text: "Astronomy", correct: false },
      { text: "Botany", correct: true },
      { text: "Agronomy", correct: false},
      { text: "Biology", correct: false },
    ],
  }, 
  {
    question: "What is dyslexia?",
    answers: [
      { text: "A fear of spiders", correct: false },
      { text: "Voice disorder", correct: false },
      { text: "Eating disorder", correct: false},
      { text: "Reading disorder", correct: true },
    ],
  }, 
  {
    question: "How many faces are there on a standard die?",
    answers: [
      { text: "Six", correct: true },
      { text: "Eight", correct: false },
      { text: "One", correct: false},
      { text: "Ten", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Gd", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Leonardo da Vinci", correct: true },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the hardest known natural substance?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "Five", correct: false },
      { text: "Six", correct: false },
      { text: "Seven", correct: true },
      { text: "Eight", correct: false },
    ],
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", correct: false },
      { text: "Spanish", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Hindi", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for water?",
    answers: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Horse", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Greyhound", correct: false },
    ],
  },
  {
    question: "Who was the first person to walk on the moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
  }
];

// set vars;
let answerDis = false;
let score = 0;
// currentQuestionindex
let currentQuestionIndex = 0; // wichtig
totalQuestionSpan.textContent = quizQuestions.length;
scoreSpanMax.textContent = quizQuestions.length;
    
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // resetting vars
  score = 0;
  scoreSpan.textContent = score;
  answerDis = false;
  currentQuestionIndex = 0;
  startScreen.classList.remove('active');
  questionScreen.classList.add('active');
  // create a fun showQuestion;
  showQuestion();
}  

function showQuestion() {
  answerDis = false;
  let currentQuestion = quizQuestions[currentQuestionIndex];
  questionSpan.textContent  = currentQuestionIndex + 1;
  
  answersContainer.innerHTML = "";
  questionPlace.textContent = currentQuestion.question;
  
  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.classList.add('answer-btn');
    button.dataset.correct = answer.correct;
    button.textContent = answer.text;
    answersContainer.appendChild(button);
    button.addEventListener('click', answersFun);
    
    function answersFun(n){
      if(answerDis) return; 
      answerDis = true;
      let selectedBtn = n.target;
      let isCorrect = selectedBtn.dataset.correct === "true";
      
      Array.from(answersContainer.children).forEach((nn) => {
        if(nn.dataset.correct === "true"){
          nn.classList.add("correct")
        } else if(nn === selectedBtn){
          nn.classList.add("incorrect")
        }
      });
      
      if(isCorrect){
        score ++;
        scoreSpan.textContent = score;
      }
      
      setTimeout(() => {
        currentQuestionIndex ++;
        if(currentQuestionIndex < quizQuestions.length){
          showQuestion();
        } else {
          showResults();
        }
      }, 820);
    }  
  });
}

function showResults(){
  questionScreen.classList.remove('active');
  resultScreen.classList.add('active');
  restartQuizButton.addEventListener('click', restartQuiz);
  resultsSpan.textContent = score;
  
  // if statements for the score // 
  if(score === 0) {
    resultMsg.textContent = "Bro is literally an NPC. Negative aura detected. 💀";
  } else if(score === 1) {
    resultMsg.textContent = "Vro... did you even try? You're absolutely cooked. 😭";
  } else if(score === 2) {
    resultMsg.textContent = "Nah son, this ain't it. Massive skill issue. 📉";
  } else if(score === 3) {
    resultMsg.textContent = "Bro's brain is running on 900 ping right now. 🐌";
  } else if(score === 4) {
    resultMsg.textContent = "You really thought you did something there, huh lil bro? 💀";
  } else if(score === 5) {
    resultMsg.textContent = "Get gud son. Start looksmaxxing that brain. 🧠";
  } else if(score === 6) {
    resultMsg.textContent = "Bro is allergic to knowing things. Common L. 🤧";
  } else if(score === 7) {
    resultMsg.textContent = "Mid. Literally the definition of mid, vro. 😐";
  } else if(score === 8) {
    resultMsg.textContent = "Bro is hardstuck in silver rank IRL. 🥈";
  } else if(score === 9) {
    resultMsg.textContent = "Let him cook? Nah, turn the stove off son. 🍳🚫";
  } else if(score === 10) {
    resultMsg.textContent = "Okay vro, I see you catching a W. We take those. 🏆";
  } else if(score === 11) {
    resultMsg.textContent = "Bro actually locked in for a second. Valid. 🔒";
  } else if(score === 12) {
    resultMsg.textContent = "Lowkey not bad, son. No cap. 🧢🚫";
  } else if(score === 13) {
    resultMsg.textContent = "W rizz on the brainpower, bro. You ate that up. 🍽️";
  } else if(score === 14) {
    resultMsg.textContent = "Vro is actually HIM. Main character energy. 🗿";
  } else if(score === 15) {
    resultMsg.textContent = "Bro is cooking with straight gas now! 🗣️🔥";
  } else if(score === 16) {
    resultMsg.textContent = "Gigachad levels of smart. Massive W son. 🗿🍷";
  } else if(score === 17) {
    resultMsg.textContent = "Bro beat the matrix. Absolute sigma behavior right here. 🕶️💊";
  }
  // ----------------------- // 
}

function restartQuiz(){
  // a challenge every time the quiz restarts change the first question
  score = 0;
  resultScreen.classList.remove('active');
  startQuiz();
}
