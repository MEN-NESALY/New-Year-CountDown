const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();
function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  d < 10
    ? (dayEl.innerText = "00" + d)
    : d < 100
    ? (dayEl.innerText = "0" + d)
    : (dayEl.innerText = d);
  h < 10 ? (hourEl.innerText = "0" + h) : (hourEl.innerText = h);
  m < 10 ? (minuteEl.innerText = "0" + m) : (minuteEl.innerText = m);
  s < 10 ? (secondEl.innerText = "0" + s) : (secondEl.innerText = s);

  setTimeout(updateCountdown, 1000);
}
