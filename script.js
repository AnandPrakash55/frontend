let countdown;
  let timerDisplay = document.getElementById('timer');
  let playButton = document.getElementById('play');
  let pauseButton = document.getElementById('pause');
  let resetButton = document.getElementById('reset');
  let minutesInput = document.getElementById('minutes');

  playButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);

  function startTimer() {
    if (!countdown) {
      let totalSeconds = minutesInput.value * 60;
      updateDisplay(totalSeconds);
      countdown = setInterval(updateTimer, 1000);
      minutesInput.disabled = true;
    }
  }

  function updateTimer() {
    let seconds = parseInt(timerDisplay.textContent.split(':')[1], 10);
    let minutes = parseInt(timerDisplay.textContent.split(':')[0], 10);

    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(countdown);
      minutesInput.disabled = false;
    }

    updateDisplay(minutes * 60 + seconds);
  }

  function updateDisplay(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
  }

  function padTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  function pauseTimer() {
    clearInterval(countdown);
    countdown = null;
    minutesInput.disabled = false;
  }

  function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    minutesInput.disabled = false;
    minutesInput.value = 1;
    updateDisplay(60); 
  }