const timeBox = document.querySelector(".timeBox");
const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const intervalId = setInterval(() => {
    if (count < 10) {
        count += 1;
        timer.innerHTML = count;
    } else {
        timeBox.style.display = "none";
        clearInterval(intervalId);
    }
}, 1000);