const newYear = "1 JAN 2026";

const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secEL = document.getElementById("secs");

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysEL.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(minutes);
  secEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
