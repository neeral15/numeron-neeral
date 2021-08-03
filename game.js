var score = 0;
var time = 5;
var number1 = Math.round(Math.random() * 100);
var number2 = Math.round(Math.random() * 100);

//Iteartion 1................................//



var timer = document.getElementById("timer");

number1Box.innerHTML = number1;
number2Box.innerHTML = number2;

//Iteration 2...............................//

var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();