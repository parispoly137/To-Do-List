const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = `src/bgImage/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  paintImage();
  console.log("hi");
}

init();
