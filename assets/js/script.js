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


// Other global variables
var currentQuestionIndex =0;
var timer = 60;
var timerInterval = setInterval(clocktick, 1000);
var scoreEl = 0;

// Quiz Questions 





//For loop for timer 
  


startButton.addEventListener("click", function(){
    //make the start screen disapear
startScreen.setAttribute("class", "hide");
quizScreen.removeAttribute("class", "hide");
});

function clocktick (){
 timer--;
timerEl.textContent = timer;
if (timer ===0){
    clearInterval(timerInterval);
    return ;
} 


};




