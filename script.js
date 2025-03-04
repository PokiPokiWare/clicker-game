let counter = 0;
let autoClickers = 0;
let multiplier = 1;

const counterElement = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");
const buyAutoClickerButton = document.getElementById("buyAutoClicker");
const buyMultiplierButton = document.getElementById("buyMultiplier");
const autoClickerCountElement = document.getElementById("autoClickerCount");
const multiplierCountElement = document.getElementById("multiplierCount");

// Function to save game data
function saveGame() {
    localStorage.setItem("counter", counter);
    localStorage.setItem("autoClickers", autoClickers);
    localStorage.setItem("multiplier", multiplier);
}

// Function to load game data
function loadGame() {
    const savedCounter = localStorage.getItem("counter");
    const savedAutoClickers = localStorage.getItem("autoClickers");
    const savedMultiplier = localStorage.getItem("multiplier");

    if (savedCounter !== null) counter = parseInt(savedCounter);
    if (savedAutoClickers !== null) autoClickers = parseInt(savedAutoClickers);
    if (savedMultiplier !== null) multiplier = parseInt(savedMultiplier);

    counterElement.textContent = counter;
    autoClickerCountElement.textContent = `Auto Clickers: ${autoClickers}`;
    multiplierCountElement.textContent = `Multiplier: x${multiplier}`;
}

// Load game on start
loadGame();

// Function to update the counter
function updateCounter() {
    counter += multiplier;
    counterElement.textContent = counter;
    saveGame(); // Save progress after each click
}

// Attach event listener with fallback for mobile touch events
clickButton.addEventListener("click", updateCounter);
clickButton.addEventListener("touchstart", updateCounter);

// Auto Clicker purchase logic
buyAutoClickerButton.addEventListener("click", function () {
    if (counter >= 10) {
        counter -= 10;
        autoClickers++;
        autoClickerCountElement.textContent = `Auto Clickers: ${autoClickers}`;
        counterElement.textContent = counter;
        saveGame(); // Save after purchase
    }
});

// Multiplier purchase logic
buyMultiplierButton.addEventListener("click", function () {
    if (counter >= 50) {
        counter -= 50;
        multiplier++;
        multiplierCountElement.textContent = `Multiplier: x${multiplier}`;
        counterElement.textContent = counter;
        saveGame(); // Save after purchase
    }
});

// Auto Clicker effect
setInterval(function () {
    if (autoClickers > 0) {
        counter += autoClickers;
        counterElement.textContent = counter;
        saveGame(); // Save after auto clicks
    }
}, 1000);
