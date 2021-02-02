const time = document.querySelector(".time__display");

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

function startTime() {
  var today = new Date(),
    h = checkTime(today.getHours()),
    m = checkTime(today.getMinutes()),
    s = checkTime(today.getSeconds());
  time.innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}

function init() {
  startTime();
}

init();
