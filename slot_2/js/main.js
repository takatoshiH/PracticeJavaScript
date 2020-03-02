class Panel {
  constructor() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.textContent = Math.floor(Math.random() * 3) + 1;
    document.getElementById("slot").appendChild(content);
  }

  timeoutId = null;
  spin() {
    this.timeoutId = setTimeout(() => {
      this.content = Math.floor(Math.random() * 3) + 1;
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
