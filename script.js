let clicks = Number(localStorage.getItem("clicks")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let autoClickers = Number(localStorage.getItem("autoClickers")) || 0;

let autoCost = Number(localStorage.getItem("autoCost")) || 50;
let multiCost = Number(localStorage.getItem("multiCost")) || 100;

const countDisplay = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const autoBtn = document.getElementById("autoClickerBtn");
const multiBtn = document.getElementById("multiplierBtn");

const autoCostSpan = document.getElementById("autoCost");
const multiCostSpan = document.getElementById("multiCost");

function updateUI() {
  countDisplay.textContent = clicks;
  autoCostSpan.textContent = autoCost;
  multiCostSpan.textContent = multiCost;

  autoBtn.disabled = clicks < autoCost;
  multiBtn.disabled = clicks < multiCost;
}

clickBtn.addEventListener("click", () => {
  clicks += clickPower;
  save();
  updateUI();
});

autoBtn.addEventListener("click", () => {
  if (clicks >= autoCost) {
    clicks -= autoCost;
    autoClickers++;
    autoCost = Math.floor(autoCost * 1.5);
    save();
    updateUI();
  }
});

multiBtn.addEventListener("click", () => {
  if (clicks >= multiCost) {
    clicks -= multiCost;
    clickPower *= 2;
    multiCost = Math.floor(multiCost * 2);
    save();
    updateUI();
  }
});

// Auto-click every second
setInterval(() => {
  clicks += autoClickers;
  save();
  updateUI();
}, 1000);

function save() {
  localStorage.setItem("clicks", clicks);
  localStorage.setItem("clickPower", clickPower);
  localStorage.setItem("autoClickers", autoClickers);
  localStorage.setItem("autoCost", autoCost);
  localStorage.setItem("multiCost", multiCost);
}

updateUI();
