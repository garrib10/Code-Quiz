var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var questionEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var highscoreEL =document.getElementById("highscore");
var highscoreName= document.getElementById("highscoreName")
var buttonA =document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD= document.getElementById("D");

// Quiz Questions 
var quizQuestions = [{
    question: "What was the Beatle's Debut Album?",
    choiceA: "Yellow Submarine",
    choiceB: "Please Please Me",
    choiceC: "A Hard Day's Night",
    choiceD: "Abbey Road",
    correctAnswer: "B"},
  {
    question: "What was the Beach Boy's Debut Album?",
    choiceA: "Surfin' Safari",
    choiceB: "Pet Sounds",
    choiceC: "Surfer Girl",
    choiceD: "Smiley Smile",
    correctAnswer: "A"},
   {
    question: "What was Ozzy Osbourne debut Solo Album?",
    choiceA: "Bark at the Moon",
    choiceB: "Diary of A Madman",
    choiceC: "Blizzard of Ozz",
    choiceD: "No Rest for the Wicked",
    correctAnswer: "C"},
    {
    question: "What was Led Zepplelin debut album?",
    choiceA: "Physical Graffiti",
    choiceB: "Houses of the Holy",
    choiceC: "Presence",
    choiceD: "Led Zeppelin;",
    correctAnswer: "D"},
   {
   question: "What was Black Sabbath's Debut Album?",
   choiceA: "Paranoid",
   choiceB: "Sabotage",
   choiceC: "Forbidden",
   choiceD: "Black Sabbath",
   correctAnswer: "D"},
];

// Other global variables
var timer = 60;
var timerInterval = setInterval(clocktick, 1000);
var scoreEl = 0;

//Start Button 
  startButton.addEventListener("click", function(){
    //make the start screen disapear
startScreen.setAttribute("class", "hide");
quizScreen.removeAttribute("class", "hide");
});

//Timer 
function clocktick (){
 timer--;
timerEl.textContent = timer;
if (timer ===0){
    clearInterval(timerInterval);
    showScore () ;
} 
//For loop
for (let i = 0; i < question.length; i++) {
  if (response == question[i].correctAnswer) {
    score=+20;
    next ();
  }
   else {
     timer=-10;
   }

//End Game Scenario 
   function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}
 //store the scores on local storage
function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}
// Get Score on local storage 
function getScore() {
  var quizContent = `
  <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
  <h1>` + localStorage.getItem("highscore") + `</h1><br> 
  
  <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
  
  `;

  document.getElementById("quizBody").innerHTML = quizContent;
}
//loops through the questions 
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
      endGame();
      return;
  

};



}
}
}
