let timerInterval;
let time = 0;

function updateTime() {
  let hours, minutes, seconds;
  hours = Math.floor(time / 3600);
  minutes = Math.floor((time % 3600) / 60);
  seconds = time % 60;
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = timeString;
}

function startTimer() {
  const input = document.getElementById('time').value.split(':');
  const hours = parseInt(input[0]);
  const minutes = parseInt(input[1]);
  const seconds = parseInt(input[2]);
  time = hours * 3600 + minutes * 60 + seconds;
  if (time <= 0) {
    alert('Please enter a valid time');
    clearInterval(timerInterval);
    updateTime();
    return;
  }
  updateTime();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      time = hours * 3600 + minutes * 60 + seconds;
      updateTime();
      return;
    }
    updateTime();
  }, 1000);
}

$(document).ready(function() {
  $('.masked').inputmask({
    mask: '99:99:99'
  });
});

document.getElementById('startButton').addEventListener('click', startTimer);
