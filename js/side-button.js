const sideBarIcon = document.querySelectorAll(".btn__side"),
  slideBar = document.querySelector(".sidebar"),
  whiteBox = document.querySelector(".sidebar__whiteBox"),
  sideContentsContainer = document.querySelectorAll(
    ".sidebar__whiteBox__column"
  );

function showSideIconContents(selectedSideBarIcon) {
  console.log(sideContentsContainer.length);
  if (selectedSideBarIcon.contains("btn__arrow")) {
    for (let i = 0; i < sideContentsContainer.length; i++) {
      sideContentsContainer[i].classList.remove("show-contents");
    }
    return;
  }
  for (let j = 0; j < sideContentsContainer.length; j++) {
    sideContentsContainer[j].classList.remove("show-contents");
  }

  if (selectedSideBarIcon.contains("about__routine")) {
    sideContentsContainer[0].classList.add("show-contents");
  } else if (selectedSideBarIcon.contains("about__toDos")) {
    sideContentsContainer[1].classList.add("show-contents");
  } else {
    sideContentsContainer[2].classList.add("show-contents");
  }
}

function highlightSideIcon(selectedSideBarIcon) {
  if (selectedSideBarIcon.contains("btn__arrow")) {
    for (let i = 1; i < sideBarIcon.length; i++) {
      sideBarIcon[i].classList.remove("btn__side-clicked");
    }
    return;
  }

  for (let j = 1; j < sideBarIcon.length; j++) {
    sideBarIcon[j].classList.remove("btn__side-clicked");
  }

  if (!selectedSideBarIcon.contains("btn__side-clicked")) {
    selectedSideBarIcon.add("btn__side-clicked");
  }
}

function selectSideIcon(selectedSideBarIcon) {
  //  whiteBox 디스플레이
  highlightSideIcon(selectedSideBarIcon);
  showSideIconContents(selectedSideBarIcon);

  // for (let j = 1; j < sideBarIcon.length; j++) {
  //   sideContentsContainer[i].classList.remove("show-contents");

  //   console.log("hello");
  // }
}

function slideMenu(arrow) {
  if (slideBar.classList.contains("sliding")) {
    slideBar.classList.remove("sliding");
    slideBar.classList.add("sliding-back");
    arrow.remove("fa-angle-double-right");
    arrow.add("fa-angle-double-left");
    whiteBox.classList.add("hiding");
    whiteBox.classList.remove("visible");
  } else {
    slideBar.classList.add("sliding");
    slideBar.classList.remove("sliding-back");
    arrow.remove("fa-angle-double-left");
    arrow.add("fa-angle-double-right");
    whiteBox.classList.add("visible");
    whiteBox.classList.remove("hiding");
  }
}

function handleClick() {
  const arrow = this.childNodes[1].classList,
    selectedSideBarIcon = this.classList;
  selectSideIcon(selectedSideBarIcon);
  if (this.classList.contains("btn__arrow")) return slideMenu(arrow);
}

function init() {
  for (let i = 0; i < sideBarIcon.length; i++) {
    sideBarIcon[i].addEventListener("click", handleClick);
  }
}

init();
