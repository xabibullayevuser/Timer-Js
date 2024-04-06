let timerInterval;
let timeRemaining;

let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", pauseTimer);

function startTimer() {
  let minutes = parseInt(prompt("Minut ya'ni son kiriting:"));
  timeRemaining = minutes * 60; // Convert minutes to seconds
  
  startButton.disabled = true;
  stopButton.disabled = false;

  timerInterval = setInterval(() => {
    let minutesLeft = Math.floor(timeRemaining / 60);
    let secondsLeft = timeRemaining % 60;
    timerDisplay.textContent = `${pad(minutesLeft)}:${pad(secondsLeft)}`;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      alert("Vaqt tugadi");
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}