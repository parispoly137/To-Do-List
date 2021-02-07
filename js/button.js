const btn = document.querySelectorAll(".btn"),
  btnDisplay = document.querySelectorAll(".btn__display");

// function paintBtnBox() {
//   const span = document.createElement("span");
//   span.innerHTML = "jo";

//   btn.appendChild(span);
// }

function createDisplay() {
  const display = document.createElement("span");
}

function handleClick(event) {
  event.preventDefault();
  const displayClassList = this.nextElementSibling.classList,
    btnClassList = this.classList;

  if (displayClassList.contains("showing") === true) {
    btnClassList.remove("move-left");
    btnClassList.add("move-left-back");
    displayClassList.remove("showing");
    displayClassList.add("hiding");
  } else {
    btnClassList.add("move-left");
    btnClassList.remove("move-left-back");
    displayClassList.add("showing");
    displayClassList.remove("hiding");
  }
}

function init() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleClick);
  }
}

init();
