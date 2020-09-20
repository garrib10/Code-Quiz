const timerElement = document.getElementById("time-remaining");
const timerView = document.getElementById("timer");
const highScoreView = document.querySelector("#highscores");
const startButton = document.getElementById("start");

const mainElement = document.querySelector("#questions");
const messageElement = document.querySelector("h1");
const textElement = document.querySelector("p");

const choicesListElement = document.getElementById("questions");
const indicatorElement = document.getElementById("indicator");

const formElement = document.createElement("div");
const highscoresElement = document.createElement("div");
const textInputElement = document.createElement("input");
const formButton = document.createElement("button");
const backButton = document.createElement("button");
const clearButton = document.createElement("button");


var highscore = {
  initials: "",
  score: 0,
};
var highscores = [];
var secondsLeft;
var timerInterval;

//Questions//
var questions = [
  {
    question: "What was the Beach Boy's Debut Album?",
    choices: ["A. Surfin' Safari", "B. Pet Sounds", "C. Surfer Girl", "D. Smiley Smile "],
    answer: 0,
  },

  {
    question: "What was Ozzy Osbourne's Debut Solo Album?",
    choices: ["A. Bark at the Moon", "B. Diary of A Madman", "C. Blizzard of Ozz", "D. No Rest for the Wicked"],
    answer: 2,
  },

  {
    question:
      "What was Led Zepplelin Debut Album?",
    choices: ["A. Physical Graffiti", "B. Houses of the Holy", "C. Presence", "D. Led Zeppelin"],
    answer: 3,
  },
  {
    question: "What was Black Sabbath's Debut Album?",
    choices: ["A. Paranoid", "B. Sabotage", "C. Forbidden", "D. Black Sabbath"],
    answer: 3,
  },
  {
    question: "What was the Beatle's Debut Album?",
    choices: ["A. Yellow Submarine", "B. Please Please Me", "C. A Hard Day's Night", "D. Abbey Road"],

    answer: 1,
  },
];



init();

function init() {
  score = 0;
  secondsLeft = 60;
}
//Start Game//
function startGame() {
  startButton.remove();
  textElement.remove();
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  renderQuiz();
}

function renderQuiz(questionNumber) {
  questionNumber = questionNumber || 0;
  var questionItem = questions[questionNumber];
  messageElement.textContent = questionItem.question;

  var newChoices = document.createElement("div");
  choicesListElement.appendChild(newChoices);

  for (var i = 0; i < questionItem.choices.length; i++) {
    var choice = questionItem.choices[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.textContent = choice;
    newChoices.appendChild(li);

    li.addEventListener("click", function (event) {
      if (
        questionItem.answer ===
        parseInt(event.target.getAttribute("data-index"))
      ) {
        score += 20;
        indicatorElement.innerHTML = "<hr> CORRECT!";
        indicatorElement.setAttribute("style", "color: green");
      } else {
        secondsLeft -= 10;
        indicatorElement.innerHTML = "<hr> WRONG!";
        indicatorElement.setAttribute("style", "color: black");
      }

      questionNumber++;

      if (questionNumber === questions.length) {
        clearInterval(timerInterval);
        indicatorElement.textContent = "";
        newChoices.remove();
        messageElement.textContent = "Times Up!";
        messageElement.appendChild(textElement);
        textElement.textContent = "Your final score is: " + score;

        renderForm();
      } else {
        setTimeout(function () {
          renderQuiz(questionNumber);
          newChoices.remove();
          indicatorElement.textContent = "";
        }, 1000);
      }
    });
  }
}

function renderForm() {
  formElement.textContent = "ENTER NAME: ";
  formElement.setAttribute("style", "color: white");
  formButton.textContent = "SUBMIT";
  mainElement.appendChild(formElement);
  formElement.appendChild(textInputElement);
  formElement.appendChild(formButton);
}
//High Score // 
function submitHighscore() {
  var initialInput = document.querySelector("input").value;
  highscore.initials = initialInput;
  highscore.score = score;
  console.log(highscore);
  localStorage.setItem("highscore", JSON.stringify(highscore));
  mainElement.innerHTML = "";
  highScoreView.textContent = "";
  timerView.textContent = "";

  renderHighscores();
}

function renderHighscores() {
  var storedHighscore = JSON.parse(localStorage.getItem("highscore"));
  console.log(storedHighscore);
  messageElement.innerHTML = "Highscores";
  messageElement.setAttribute("style", "color: black");
  mainElement.appendChild(messageElement);
  console.log(storedHighscore.initials);
  console.log(storedHighscore.score);
  highscoresElement.setAttribute("class", "highscore-element");
  highscoresElement.textContent = `${storedHighscore.initials} - ${storedHighscore.score}`;
  messageElement.appendChild(highscoresElement);
  backButton.textContent = "Home";
  clearButton.textContent = "Clear";
  mainElement.appendChild(backButton);
  mainElement.appendChild(clearButton);
}

function clear() {
  highscoresElement.remove();
}

function home() {
  location.reload();
}

highScoreView.addEventListener("click", function () {
  textElement.remove();
  startButton.remove();
  renderHighscores();
});

startButton.addEventListener("click", startGame);
formButton.addEventListener("click", submitHighscore);
backButton.addEventListener("click", home);
clearButton.addEventListener("click", clear);