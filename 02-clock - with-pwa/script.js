const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();

    // Calculate degrees with fractions for smooth movement
    const sDeg = (s / 60) * 360;
    const mDeg = ((m + s / 60) / 60) * 360;
    const hDeg = (((h % 12) + m / 60) / 12) * 360;

    // Use a CSS variable or template literal; avoid overwriting translateX if possible
    hourHand.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;

    requestAnimationFrame(updateClock);
}

// Start the loop
requestAnimationFrame(updateClock);
