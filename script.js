// first get all IDs then creat funs[1] and funs for deleting classes[2] - adding scors[3] and yk those stuff 
let startButton = document.getElementById('starting-button');
let quesitonSpan = document.getElementById('question-span');
let scoreSpan = document.getElementById('score-span');
let questionPlace = document.getElementById('questionPlace');
let startScreen = document.querySelector('.start-screen');
let quesitonScreen = document.querySelector('.question-screen');
let resultsDiv = document.querySelector('.results-div');
let answersContainer = document.getElementById('answers');
let progressBar = document.getElementById('prpogress-bar');
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
      { text: "Shiboya", correct: false },
      { text: "Berlin", correct: false },
      { text: "James Lee", correct: false },
      { text: "Tokyo", correct: true },
    ],
  },
  {
    question: "At least than 1 square kilometer, what is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Vstican City", correct: true },
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
      { text: "Agtronomy", correct: false},
      { text: "Biology", correct: false },
    ],
  }, {
    question: "What is dyslexia?",
    answers: [
      { text: "A fear of spiders", correct: false },
      { text: "Voice disorder", correct: false },
      { text: "Eating disorder", correct: false},
      { text: "Reading dusirder", correct: true },
    ],
  }, {
    question: "How many faces are there in a single die?",
    answers: [
      { text: "Six", correct: true },
      { text: "Eight", correct: false },
      { text: "one", correct: false},
      { text: "Ten", correct: false },
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
    
startButton.addEventListener('click',startQuiz);

function startQuiz() {
  // resetting vars
  score = 0;
  scoreSpan.textContent = score;
  answerDis = false;
  currentQuestionIndex = 0;
  startScreen.classList.remove('active');
  quesitonScreen.classList.add('active');
  // creat a fun showQuestion;
  showQuestion();
}  

  function showQuestion() {
    // score = 0;
  answerDis = false;
  let currentQuestion = quizQuestions[currentQuestionIndex];
    quesitonSpan.textContent  = currentQuestionIndex +1;
 //
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
          if(answerDis) return; // = true;
          answerDis = true;
          let selectedBtn = n.target;
          let isCorrect = selectedBtn.dataset.correct === "true";
          Array.from(answersContainer.children).forEach((nn) => {
            if(nn.dataset.correct === "true"){
              nn.classList.add("correct")
            }else if(nn === selectedBtn){
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
          }else{
            showResults();
          }
          },820);
        }  
     });
   }
  function showResults(){
    quesitonScreen.classList.remove('active');
     resultScreen.classList.add('active');
      restartQuizButton.addEventListener('click', restartQuiz);
      resultsSpan.textContent = score;
        // if statments for the score // 
      if(score === 1){
      resultMsg.textContent = "Don't let your ass result dickpress you";
    }else if(score === 2) {
      resultMsg.textContent = "God damnit you're an ass to hell!";
    }else if(score === 3) {
      resultMsg.textContent = "Thanks you for letting your last 2 brain cells get back to work! ";
    }else if(score === 4) {
      resultMsg.textContent = "I'm so proud of how a monky you are!";
    }else if(score === 5) {
      resultMsg.textContent = "I'm kinda dissapointed but keep the hard work!";
    }else if(score === 6) {
      resultMsg.textContent = "Looks like Einstein got back to life!";
    }else if(score === 7) {
      resultMsg.textContent = "You just got lucky don't restart the quiz you'll lose.";
    }else if(score === 0) {
      resultMsg.textContent = "Trust me suic-de yourself you're so dangrous for the human beings....";
    }
    // ----------------------- // 
  }
  function restartQuiz(){
    // a chlng every time the quiz restarts change the first question
    score = 0;
    resultScreen.classList.remove('active');
      startQuiz();
  }
// creat restart quiz fun
 