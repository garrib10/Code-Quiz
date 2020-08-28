var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var choiceA =document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");


var timer = 60;
var timerInterval = setInterval(clocktick, 1000)
var scoreEl = 0;

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
 
}

