const mainBtn = document.querySelectorAll(".btn__main"),
  btnDisplay = document.querySelectorAll(".btn__display");

// function paintBtnBox() {
//   const span = document.createElement("span");
//   span.innerHTML = "jo";

//   btn.appendChild(span);
// }

function handleClick(event) {
  event.preventDefault();
  const displayClassList = this.nextElementSibling.classList,
    mainBtnClassList = this.classList;

  if (displayClassList.contains("showing") === true) {
    mainBtnClassList.remove("move-left");
    mainBtnClassList.add("move-left-back");
    displayClassList.remove("showing");
    displayClassList.add("hiding");
  } else {
    mainBtnClassList.add("move-left");
    mainBtnClassList.remove("move-left-back");
    displayClassList.add("showing");
    displayClassList.remove("hiding");
  }
}

function init() {
  for (let i = 0; i < mainBtn.length; i++) {
    mainBtn[i].addEventListener("click", handleClick);
  }
}

init();
