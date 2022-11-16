let col1 = document.getElementById("col1");
let col2 = document.getElementById("col2");
let col3 = document.getElementById("col3");
let col4 = document.getElementById("col4");
let col5 = document.getElementById("col5");
let count = document.getElementById("count");
let back = document.getElementById("back");
let input = document.getElementById("myInput");

let intervalId;

function stopTimer() {
  clearInterval(intervalId);
}

function Timer(Second) {

  intervalId = setInterval(() => {
    let minutes = parseInt(Second / 60);
    let secondes = parseInt(Second % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    count.textContent = `${minutes}:${secondes}`;
    Second = Second <= 0 ? 0 : Second - 1;
  }, 1000);

  let minuteToAdd = Second / 60;
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + minuteToAdd * 60000);

  let lesHeures =
    futureDate.getHours() < 10
      ? "0" + futureDate.getHours()
      : futureDate.getHours();
  let lesMinutes =
    futureDate.getMinutes() < 10
      ? "0" + futureDate.getMinutes()
      : futureDate.getMinutes();

  document.getElementById("p1").innerHTML =
    futureDate.innerHTML = `BE BACK at ${lesHeures}:${lesMinutes}`;
}

function Timer2(minute) {
  setInterval(() => {
    let minutes = parseInt(minute / 60, 10);
    let secondes = parseInt(minute % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    count.textContent = `${minutes}:${secondes}`;
    minute = minute <= 0 ? 0 : minute - 1;
  }, 1000);

  let minuteToAdd = minute / 60;
  let currentDate = new Date();
  let futureDate = new Date(currentDate.getTime() + minuteToAdd * 60000);
  let lesHeures =
    futureDate.getHours() < 10
      ? "0" + futureDate.getHours()
      : futureDate.getHours();
  let lesMinutes =
    futureDate.getMinutes() < 10
      ? "0" + futureDate.getMinutes()
      : futureDate.getMinutes();

  document.getElementById("p1").innerHTML =
    futureDate.innerHTML = `BE BACK at ${lesHeures}:${lesMinutes}`;
}


col1.addEventListener("click", function () {
  stopTimer();
  Timer(20);
});
col2.addEventListener("click", function () {
  stopTimer()
  Timer(300);
});
col3.addEventListener("click", function () {
  stopTimer()
  Timer(900);
});
col4.addEventListener("click", function () {
  stopTimer()
  Timer(1200);
});
col5.addEventListener("click", function () {
  stopTimer()
  Timer(2400);
});

input.addEventListener("change", function (e) {
  e.preventDefault();
  console.log(e.target.value);
  stopTimer()
  Timer2(parseInt(e.target.value) * 60);
});
