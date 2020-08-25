var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var timerEl = document.getElementById("timer")

var timer = 60;
var timerInterval = setInterval(clocktick, 1000)

startButton.addEventListener("click", function(){
    //make the start screen disapear
startScreen.setAttribute("class", "hide");
quizScreen.removeAttribute("class", "hide");
});

function clocktick (){
 timer--;
timerEl.textContent = timer;
}
