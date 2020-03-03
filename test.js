// var timeoutID;

// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 2000);
// }

// function slowAlert() {
//   alert('それは実に遅かった!');
// }

// function clearAlert() {
//   window.clearTimeout(timeoutID);
// }
class Alart {
  constructor() {
    this.timeoutId = undefined;
    this.spin();
  }

  spin() {
    this.timeoutId = setTimeout(() => {
      alert("ハッキングされています");
      this.spin();
    }, 1000);
  }
}

new Alart;