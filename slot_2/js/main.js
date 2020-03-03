class Panel {
  constructor() {
    this.content = document.createElement("div");
    this.content.setAttribute("id", "content");
    this.content.textContent = Math.floor(Math.random() * 3) + 1;
    document.getElementById("slot").appendChild(this.content);

    this.timeoutId = undefined;
  }

  spin() {
    this.timeoutId = setTimeout(() => {
      this.content.textContent = Math.floor(Math.random() * 3) + 1;
      console.log("good");
      this.spin();
    }, 100);
  }
}

panels = [new Panel(), new Panel(), new Panel()];
numberOfPanels = 3;

const startButtom = document.getElementById("start");
startButtom.addEventListener("click", () => {
  panels.forEach(panel => {
    panel.spin();
  });
  console.log("ok");
})
