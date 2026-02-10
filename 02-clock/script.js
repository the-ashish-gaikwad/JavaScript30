const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const calcDegrees = (time, max) => ((time / max) * 360) + 0;

setInterval(() => {
    // date obj
    const currentTime = new Date();
    const hours24 = currentTime.getHours();
    const hours12 = (hours24 % 12) || 12;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let rotationAmountOfHourHand = calcDegrees(hours12, 12);
    let rotationAmountOfMinuteHand = calcDegrees(minutes, 60);
    let rotationAmountOfSecondHand = calcDegrees(seconds, 60);

    hourHand.style.transform = `translateX(-50%) rotate(${rotationAmountOfHourHand}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${rotationAmountOfMinuteHand}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${rotationAmountOfSecondHand}deg)`;

}, 1000)


