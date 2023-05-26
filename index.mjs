const clockElement = document.querySelector(".clock");

const btnStart = document.querySelector(".btn-start"),
  btnPause = document.querySelector(".btn-pause"),
  btnReset = document.querySelector(".btn-reset");

let timer;
let seconds = 0;
let statClock = ["clock-start", "clock-pause", "clock-reset"]; // estados do timer

function getHourOfSeconds(seconds) {
  //converte segundos em milisegundos
  const ms = seconds * 1000;

  const date = new Date(ms).toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "UTC",
  });

  return date;
}

function clearStates() {
  clockElement.classList.remove("clock-start");
  clockElement.classList.remove("clock-pause");
  clockElement.classList.remove("clock-reset");
}

function startClock() {
  clearInterval(timer);

  timer = setInterval(() => {
    seconds++;
    clockElement.innerHTML = getHourOfSeconds(seconds);
  }, 1000);
}

function pauseClock() {
  clearInterval(timer);
}

document.addEventListener("click", (e) => {
  const elClicked = e.target;

  if (elClicked.classList.contains("btn-start")) {
    clearStates();
    clockElement.classList.add(statClock[0]);

    startClock();
  }

  if (elClicked.classList.contains("btn-pause")) {
    pauseClock();
    clearStates();
    clockElement.classList.add(statClock[1]);
  }

  if (elClicked.classList.contains("btn-reset")) {
    pauseClock();
    clearStates();
    seconds = 0;
    clockElement.innerHTML = "00:00:00";
    clockElement.classList.add(statClock[2]);
  }
});