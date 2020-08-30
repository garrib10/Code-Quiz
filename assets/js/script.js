var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var questionEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
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

  }

};




