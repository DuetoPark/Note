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
let baseballArticle = document.querySelector(".baseball");

let baseballResult = document.createElement("strong");
baseballArticle.append(baseballResult);

let baseballForm = document.createElement("form");
baseballArticle.append(baseballForm);

let baseballInput = document.createElement("input");
baseballForm.append(baseballInput);

let baseballSubmit = document.createElement("button");
baseballForm.append(baseballSubmit);


let 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let 숫자배열 = [];
for (let i=0; i<4; i++) {
  let 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  숫자배열.push(뽑은것);
}

let 입력값 = baseballInput.value;
let 도전횟수 = 0;

baseballForm.addEventListener("submit", function (e) {
  e.preventDefault();



  for (도전횟수=0; 도전횟수<10; 도전횟수++){
    // for (let i=0; i<숫자배열.length; i++) {
    //   if (숫자[i] === Number(입력값)[0]) {
    //
    //   } else {
    //
    //   }
    // }

  }
  도전횟수++;
});
