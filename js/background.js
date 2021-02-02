const img = document.querySelector(".background");

const HOUR = "currentHour";

const startHour = parseInt(time.innerHTML.substring(6));
// function paintImage() {

//   //timeCheck로부터 받은 수를 현재 배경이미지에
//   //해당하는 넘버와 비교한다. 만약 값이 다를 경우,
//   // change를 한다. if를 여러개 선언하지 말고
//   // 이미지에 +1만 하여 바꾼다. - 시간 순이므로
//   // 6에서는 다시 1로 돌아간다.
//   const image = new Image(),
//     imgNumber = 1;

//
//   image.classList.add("bgImage");
//   body.prepend(image);
// }

async function paintImage(currentHour) {
  imageNumber = Math.floor(currentHour / 15 + 1);
  img.src = `src/${imageNumber}.jpg`;
}

function saveHour(currentHour) {
  localStorage.setItem(HOUR, currentHour);
  paintImage(currentHour);

  // if()
}

function timeCheck() {
  const currentHour = parseInt(time.innerHTML.substring(6)),
    savedHour = parseInt(localStorage.getItem(HOUR));

  if (currentHour - 1 !== savedHour || currentHour === null) {
    return saveHour(currentHour);
  }
}

function init() {
  paintImage(startHour);
  setInterval(timeCheck, 1000);
}

init();
