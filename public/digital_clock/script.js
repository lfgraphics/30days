function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    document.getElementById("hour").textContent = String(hours).padStart(2, "0");
    document.getElementById("minute").textContent = String(minutes).padStart(2, "0");
    document.getElementById("second").textContent = String(seconds).padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000);
