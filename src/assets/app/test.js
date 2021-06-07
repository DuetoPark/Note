// 끝말잇기
let article = document.querySelector(".timing");
let 단어 = document.createElement("div");
단어.textContent = "제로초";
article.append(단어);

let 폼 = document.createElement("form");
article.append(폼);

let 인풋 = document.createElement("input");
폼.append(인풋);

let 버튼 = document.createElement("button");
버튼.textContent = "등록";
폼.append(버튼);

let 결과창 = document.createElement("div");
article.append(결과창);

function 콜백함수 (e) {
  e.preventDefault();
  if(단어.textContent[단어.textContent.length - 1] === 인풋.value[0]) {
    단어.textContent = 인풋.value;
    인풋.value = 인풋.value[인풋.value.length - 1]+"";
    인풋.focus();
    결과창.textContent = "잘했어";
  } else {
    결과창.textContent = "똥";
    인풋.value = "";
    인풋.focus();
  }
}
폼.addEventListener("submit", 콜백함수);


// 구구단
let timingEventDiv = document.querySelector(".timing-event-syntax");
let timesForm = document.createElement("form");
timingEventDiv.append(timesForm);

let timesDiv = document.createElement("div");
timesForm.append(timesDiv);

let timesInput = document.createElement("input");
timesForm.append(timesInput);

let timesButton = document.createElement("button");
timesButton.textContent = "입력";
timesForm.append(timesButton);

let timesResult = document.createElement("div");
timesForm.append(timesResult);



let 숫자1 = Math.ceil(Math.random() * 9);
let 숫자2 = Math.ceil(Math.random() * 9);
let 결과 = 숫자1 * 숫자2;

timesDiv.textContent = 숫자1+"X"+숫자2+"=?";

timesForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let 답 = Number(timesInput.value);
  if (결과 === 답) {
    timesResult.textContent = "잘했어";
    timesInput.value = "";
    timesInput.focus();
    숫자1 = Math.ceil(Math.random() * 9);
    숫자2 = Math.ceil(Math.random() * 9);
    결과 = 숫자1 * 숫자2;
    timesDiv.textContent = 숫자1+"X"+숫자2+"=?";
  } else {
    timesResult.textContent = "똥";
    timesInput.value = "";
    timesInput.focus();
  }
});


// 숫자야구
// 1. 숫자 랜덤으로 뽑기
let 숫자후보;
let 숫자배열;
function randomNumber () {
  숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  숫자배열 = [];
  for (let i=0; i<4; i++) {
    let 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    숫자배열.push(뽑은것);
  }
  console.log(숫자배열);
}
randomNumber();

// 2. 화면 구성하기
let baseballArticle = document.querySelector(".baseball");

let baseballResult = document.createElement("strong");
baseballArticle.append(baseballResult);

let baseballForm = document.createElement("form");
baseballArticle.append(baseballForm);

let baseballInput = document.createElement("input");
baseballInput.maxLength = 4;
baseballForm.append(baseballInput);

let baseballSubmit = document.createElement("button");
baseballSubmit.textContent = "입력";
baseballForm.append(baseballSubmit);

let 제한 = 0;

baseballForm.addEventListener("submit", function (e) {
  e.preventDefault();
// 3. 답 입력
  let 입력값 = baseballInput.value;
  console.log(입력값);

  if (입력값 === 숫자배열.join("")) {
    baseballResult.textContent = "홈런!";
    baseballInput.value = "";
    baseballInput.focus();

    제한 = 0;
    randomNumber();
  } else {
    let 입력값배열 = 입력값.split("");
    let 스트라이크 = 0;
    let 볼 = 0;
    console.log("값이 틀리면");

    for (let i=0; i<3; i++) {
      if (Number(입력값배열[i]) === 숫자배열[i]) { //같은 자리 확인
        스트라이크++;
        console.log(i + ". 같은 자리, 같은 숫자!" + Number(입력값배열[i]), 숫자배열[i]);
      } else if (숫자배열.indexOf(Number(입력값배열[i])) > -1) { //같은 자리는 아니고 숫자는 겹치는 친구들
        볼++;
        console.log(i + ". 다른 자리, 같은 숫자!" + Number(입력값배열[i]));
      }
    }

    제한++;

    if (제한 > 10) {
      baseballResult.textContent = "10회 이상 틀려서 아웃! 정답은 " + 숫자배열.join("");
      제한 = 0;
      randomNumber();
    } else {
      baseballResult.textContent = "결과) " + 스트라이크 + " 스트라이크  " + 볼 + " 볼 현황: " + 제한 + "/10";
    }

    baseballInput.value = "";
    baseballInput.focus();
  }
});
