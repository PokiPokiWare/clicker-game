let counter = 0;
let autoClickers = 0;
let multiplier = 1;

const counterElement = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");
const buyAutoClickerButton = document.getElementById("buyAutoClicker");
const buyMultiplierButton = document.getElementById("buyMultiplier");
const autoClickerCountElement = document.getElementById("autoClickerCount");
const multiplierCountElement = document.getElementById("multiplierCount");

// Debugging: Detect if on mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log("Mobile User:", isMobile);

// Show a debug log on the page for mobile users
if (isMobile) {
    const debugLog = document.createElement("p");
    debugLog.id = "debugLog";
    debugLog.style.color = "red";
    document.body.appendChild(debugLog);
}

// Function to update the counter and log clicks
function updateCounter() {
    counter += multiplier;
    counterElement.textContent = counter;

    // Debugging: Log clicks
    console.log("Button Clicked! Counter:", counter);
    if (isMobile) {
        document.getElementById("debugLog").textContent = `Counter: ${counter}`;
    }
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
    }
});

// Multiplier purchase logic
buyMultiplierButton.addEventListener("click", function () {
    if (counter >= 50) {
        counter -= 50;
        multiplier++;
        multiplierCountElement.textContent = `Multiplier: x${multiplier}`;
        counterElement.textContent = counter;
    }
});

// Auto Clicker effect
setInterval(function () {
    if (autoClickers > 0) {
        counter += autoClickers;
        counterElement.textContent = counter;
    }
}, 1000);
