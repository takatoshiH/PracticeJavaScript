const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp() {
  const day = new Date(Date.now() - startTime + elapsedTime);
  const minutes = String(day.getMinutes()).padStart(2, '0');
  const second = String(day.getSeconds()).padStart(2, '0');
  const milliSeconds = String(day.getMilliseconds()).padStart(3, '0');
  timer.textContent = `${minutes}:${second}.${milliSeconds}`;

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

function setButtonStateInitial() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}

function setButtonStateRunning() {
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}

function setButtonStateStopped() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}

setButtonStateInitial();

start.addEventListener('click', () => {
  if (start.classList.contains('inactive') === true) {
    return;
  }
  setButtonStateRunning();
  startTime = Date.now();
  countUp();
});

stop.addEventListener('click', () => {
  if (stop.classList.contains('inactive') === true) {
    return;
  }
  setButtonStateStopped();
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;
});

reset.addEventListener('click', () => {
  if (reset.classList.contains('inactive') === true) {
    return;
  }
  setButtonStateInitial();
  timer.textContent = '00:00.000';
  elapsedTime = 0;
});