const launchDate = new Date("2023-12-31T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown(); // Call the function once to avoid initial delay

// Update the countdown every 1 second (1000ms)
setInterval(updateCountdown, 1000);
