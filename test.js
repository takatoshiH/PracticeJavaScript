var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert('それは実に遅かった!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}