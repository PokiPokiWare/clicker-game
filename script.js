let counter = 0;
const counterElement = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");

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
    counter++;
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
