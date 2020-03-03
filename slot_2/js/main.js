class Panel {
  constructor() {
    this.content = document.createElement("div");
    this.content.setAttribute("id", "content");
    this.content.textContent = Math.floor(Math.random() * 3) + 1;
    document.getElementById("slot").appendChild(this.content);

    this.timeoutId = undefined;
    this.content.addEventListener("click", () => {
      clearTimeout(this.timeoutId);
      numberOfPanels--;

      if (numberOfPanels === 0) {
        startButtom.classList.remove("inactive");
        numberOfPanels = 3;
      }
    })
  }

  spin() {
    this.timeoutId = setTimeout(() => {
      this.content.textContent = Math.floor(Math.random() * 3) + 1;
      this.spin();
    }, 100);
  }

  get number() {
    return this.content.textContent;
  }
}

let panels = [new Panel(), new Panel(), new Panel()];
let numberOfPanels = 3;

const startButtom = document.getElementById("start");
startButtom.addEventListener("click", () => {
  if (startButtom.classList.contains("inactive")) {
    return;
  }
  panels.forEach(panel => {
    panel.spin();
    startButtom.classList.add("inactive");
  });
})
