//끝말잇기
// 1.화면구성
let 끝말잇기 = document.querySelector('#끝말잇기');

let 제시어 = document.createElement('p');
제시어.textContent = '어제 먹은 피자가 진짜 맛있었어';
끝말잇기.appendChild(제시어);

let 폼 = document.createElement('form');
끝말잇기.appendChild(폼);

let 입력 = document.createElement('input');
폼.appendChild(입력);

let 제출버튼 = document.createElement('button');
제출버튼.textContent = '제출';
폼.appendChild(제출버튼);

let 결과 = document.createElement('p');
끝말잇기.appendChild(결과);

let 제시어첫글자 = "";
let 입력끝글자 = "";

// 2.문자를 나눠서 배열로 저장한다.
function 문자분해쇼() {
  let 제시어split = 제시어.textContent.split("");
  let 입력split = 입력.value.split("");

  제시어첫글자 = 제시어split[제시어split.length -1];
  입력끝글자 = 입력split[0];
  console.log(제시어첫글자, 입력끝글자);
}


// 3.제시어와 정답 비교
function 제시어와정답비교() {
  문자분해쇼();

  if(제시어첫글자 === 입력끝글자) {
    결과.textContent = '정답✨';
    제시어.textContent = 입력.value;
    입력.focus();
    입력.value = "";
  } else {
    결과.textContent = '땡👽 다시 입력해주세요';
    입력.focus();
    입력.value = "";
  }
}

function 끝말잇기제출핸들러(e) {
  e.preventDefault();
  제시어와정답비교();
}

// 4.submit 이벤트 지정
폼.addEventListener('submit', 끝말잇기제출핸들러);



// 구구단
// 1.화면구성
let 구구단 = document.querySelector('#구구단');

let 구구단문제 = document.createElement('p');
구구단.appendChild(구구단문제);

let 구구단폼 = document.createElement('form');
구구단.appendChild(구구단폼);

let 구구단입력 = document.createElement('input');
구구단입력.type = 'number';
구구단폼.appendChild(구구단입력);

let 구구단제출버튼 = document.createElement('button');
구구단제출버튼.textContent = "제출";
구구단폼.appendChild(구구단제출버튼);

let 구구단결과 = document.createElement('p');
구구단.appendChild(구구단결과);

let 랜덤숫자1 = "";
let 랜덤숫자2 = "";

// 2.무작위로 숫자뽑기
function 무작위로숫자뽑기() {
  랜덤숫자1 = Math.ceil(Math.random() * 9);
  랜덤숫자2 = Math.ceil(Math.random() * 9);
  구구단문제.textContent = 랜덤숫자1+"곱하기"+랜덤숫자2;
}
무작위로숫자뽑기();

// 3.문제와 입력값비교
function 구구단정답비교() {
  let 구구단정답 = 랜덤숫자1 * 랜덤숫자2;
  let 입력한숫자 = Number(구구단입력.value);

  if(구구단정답 === 입력한숫자){
    구구단결과.textContent = '잘했어 내새끼👍';
    구구단입력.focus();
    구구단입력.value = "";
    무작위로숫자뽑기();
  } else {
    구구단결과.textContent = '똥💩 다시 입력해주세요';
    구구단입력.focus();
    구구단입력.value = "";
  }
}

function 구구단제출핸들러(e) {
  e.preventDefault();
  구구단정답비교();
}

// 4.submit 이벤트 지정
구구단폼.addEventListener('submit', 구구단제출핸들러);



//숫자야구
// 1. 요소생성
let 숫자야구 = document.querySelector('#baseball');

let 숫자야구문구 = document.createElement('p');
숫자야구문구.textContent = '네자리 숫자를 입력하세요';
숫자야구.appendChild(숫자야구문구);

let 숫자야구폼 = document.createElement('form');
숫자야구.appendChild(숫자야구폼);

let 숫자야구입력 = document.createElement('input');
숫자야구입력.type = 'number';
숫자야구폼.appendChild(숫자야구입력);

let 숫자야구제출버튼 = document.createElement('button');
숫자야구제출버튼.textContent = "제출";
숫자야구폼.appendChild(숫자야구제출버튼);

let 숫자야구결과 = document.createElement('p');
숫자야구.appendChild(숫자야구결과);

// 2.게임 초기화
let 후보;
let 컴퓨터의정답;
let 게임진행횟수 = 0;

function 게임초기화() {
  후보 = [1,2,3,4,5,6,7,8,9];
  컴퓨터의정답 = [];
  게임진행횟수 = 0;

  while (후보.length>5) { // 컴퓨터의정답 무작위로 뽑기
    //후보 배열에서 무작위로 하나의 요소를 뽑고, 컴퓨터의정답 배열에 집어 넣음.
    컴퓨터의정답.push(후보.splice(Math.floor(Math.random() * 후보.length) ,1)[0]);
  }
  console.log('컴퓨터의정답', 컴퓨터의정답);
}
게임초기화();

// 3.숫자야구입력값 배열로 만듦
let 내가입력한답 = [];
function 숫자야구입력배열로변환() {
  let 입력값 = 숫자야구입력.value.split(""); //인풋에 입력된 값을 조각내어 배열로 묶는다.
  for(let i=0; i<입력값.length; i+=1){
    내가입력한답[i] = Number(입력값[i]); //split의 배열은 문자열이므로 숫자로 변환시킨다.
  }
  console.log('내가입력한답', 내가입력한답);
}

// 4.숫자야구정답확인
let 스트라이크;
let 볼;

function 숫자야구정답확인() {
  스트라이크 = 0; //초기화
  볼 = 0; //초기화
  숫자야구결과.textContent = ''; //초기화

  // 4-1.스트라이크와 볼 개수 확인
  for (let i=0; i<4; i+=1) {
    if (컴퓨터의정답[i] === 내가입력한답[i]) { //스트라이크 개수 확인
      스트라이크+=1;
    } else if (컴퓨터의정답.includes(내가입력한답[i])) { //볼 개수 확인
      볼+=1;
    }
  }

  게임진행횟수+=1; // 답 제출할 때마다 게임횟수 추가
  숫자야구입력.focus();
  숫자야구입력.value = ""; //화면의 인풋 초기화
}

// 5.숫자야구 결과 출력
function 숫자야구결과출력() {
  if (스트라이크 === 4) { //정답일 때
    숫자야구결과.textContent = '🎉홈런!!!!!!🎉'
    게임초기화()
  } else { //오답일 때
    숫자야구결과.textContent = "스트라이크: "+스트라이크+" 볼: "+볼+" 현재진행상황: "+게임진행횟수+"/10";
  }
}

// 6.횟수제한 10번
function 횟수제한() {
  if (게임진행횟수 === 10) {
    숫자야구결과.textContent = "아웃!!!💀 정답은 "+컴퓨터의정답.join("")+"입니다!!";
    게임초기화();
  }
}


function 숫자야구제출핸들러(e) {
  e.preventDefault();
  숫자야구입력배열로변환();
  숫자야구정답확인();
  숫자야구결과출력();
  횟수제한();
}

// 6.submit 이벤트 지정
숫자야구폼.addEventListener('submit', 숫자야구제출핸들러);



// 틱택토
// 1. 화면출력 + 데이터셋
let 모든줄 = []; //클릭한 칸의 줄 인덱스를 찾는 용도
let 모든칸 = []; //클릭한 칸의 칸 인덱스를 찾는 용도

const 틱택토 = document.querySelector('#tic-tac-toe');

let 틱택토결과 = document.createElement('p');
틱택토.appendChild(틱택토결과);

let 틱택토테이블 = document.createElement('table');
틱택토.appendChild(틱택토테이블);

for (let i=0; i<3; i+=1) {
  let 틱택토줄 = document.createElement('tr');
  틱택토테이블.appendChild(틱택토줄);
  모든줄.push(틱택토줄);
  모든칸.push([]);
  for (let j=0; j<3; j+=1) {
    let 틱택토칸 = document.createElement('td');
    틱택토줄.appendChild(틱택토칸);
    모든칸[i].push(틱택토칸);
  }
}

// 2.칸검사
let 턴 = "X";
let 모두채움 = 0;
let 현재줄인덱스;
let 현재칸인덱스;
let 무승부 = 0;
let 엑스승리 = 0;
let 오승리 = 0;

function 칸채우기(e) {
  e.target.textContent = 턴;
  모두채움+=1;
  // 클릭한 칸의 위치
  현재줄인덱스 = 모든줄.indexOf(e.target.parentElement);
  현재칸인덱스 = 모든칸[현재줄인덱스].indexOf(e.target);

  if (모두채움 === 9) { //아홉개 칸 다 차면,
    alert("😎무승부!!");
    무승부+=1;
    모두채움 = 0;
    결과출력();
    표초기화();
  } else if ( // 가로줄 검사
    모든칸[현재줄인덱스][0].textContent === 턴 &&
    모든칸[현재줄인덱스][1].textContent === 턴 &&
    모든칸[현재줄인덱스][2].textContent === 턴
  ) {
    alert(턴+"의 승리!!");
    모두채움 = 0;
    결과출력();
    표초기화();
  } else if ( // 세로줄 검사
    모든칸[0][현재칸인덱스].textContent === 턴 &&
    모든칸[1][현재칸인덱스].textContent === 턴 &&
    모든칸[2][현재칸인덱스].textContent === 턴
  ) {
    alert(턴+"의 승리!!");
    모두채움 = 0;
    결과출력();
    표초기화();
  } else if ( // 대각선 검사
    모든칸[0][0].textContent === 턴 &&
    모든칸[1][1].textContent === 턴 &&
    모든칸[2][2].textContent === 턴
  ) {
    alert(턴+"의 승리!!");
    모두채움 = 0;
    결과출력();
    표초기화();
  } else if ( // 대각선 검사
    모든칸[2][0].textContent === 턴 &&
    모든칸[1][1].textContent === 턴 &&
    모든칸[0][2].textContent === 턴
  ) {
    alert(턴+"의 승리!!");
    모두채움 = 0;
    결과출력();
    표초기화();
  } else { // 그 무엇도 아니면 턴체인지
    if (턴 === 'X') {
      턴 = 'O';
    } else {
      턴 = 'X';
    }
  }
}

// 3.결과출력
function 결과출력() {
  if (턴 === 'X') {
    엑스승리+=1;
    틱택토결과.textContent = 'X승: '+엑스승리+'회 무승부: '+무승부+'회 0승: '+오승리+'회';
  } else {
    오승리+=1;
    틱택토결과.textContent = 'X승: '+엑스승리+'회 무승부: '+무승부+'회 0승: '+오승리+'회';
  }
}

// 4.표 초기화
function 표초기화() {
  모든칸.forEach(function (모든줄) {
    모든줄.forEach(function (칸) {
      칸.textContent = "";
    });
  });
  턴 = "X";
}

// 5.클릭이벤트 지정
function 칸클릭핸들러 (e) {
  if (e.target.textContent !== "") { //칸이 채워져 있으면,
    alert("👀칸이 채워져있습니다!");
  } else { //칸이 비어있으면,
    칸채우기(e);
  }
}

틱택토테이블.addEventListener('click', 칸클릭핸들러);


//반응속도 게임
const 스크린 = document.querySelector('#screen');
var 시작시간 = "";

function 반응속도Handler() {
  if (this.classList.contains('waiting')) { // 준비 상태로 만드는 구간
    this.classList.remove('waiting');
    this.classList.add('ready');
    setTimeout(function() {
      시작시간 = new Date();
      스크린.click();
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (this.classList.contains('ready')) { // 자동으로 화면전환 구간
    this.classList.remove('ready');
    this.classList.add('now');
  } else if (this.classList.contains('now')) { // 빠르게 화면을 누르는 구간
    let 끝시간 = new Date();
    console.log(끝시간 - 시작시간);
    this.classList.remove('now');
    this.classList.add('waiting');
  }
}

스크린.addEventListener('click', 반응속도Handler);


// 카드뒤집기
const 짝맞추기 = document.querySelector("#짝맞추기");

const 가로 = 4;
const 세로 = 3;

const 색깔들 = ['tomato', 'tomato', 'gold', 'gold', 'white', 'white', 'lightblue', 'lightblue', 'gainsboro', 'gainsboro', 'darkseagreen', 'darkseagreen'];
var 색깔후보 = [];
var 색깔 = [];

var 카드플래그 = false;

var 선택카드 = [];
var 일치카드 = [];

// 화면출력
const 실행버튼 = document.createElement('button');
실행버튼.textContent = "✨실행✨";
실행버튼.className = "card-start";
짝맞추기.appendChild(실행버튼);

const 카드그룹 = document.createElement('div');
짝맞추기.appendChild(카드그룹);

function 화면출력() {
  for (let i=0; i < 가로 * 세로; i+=1) {
    const 카드 = document.createElement('div');
    카드.className = "card";
    카드그룹.appendChild(카드);

    const 카드이너 = document.createElement('div');
    카드이너.className = "card-inner";
    카드.appendChild(카드이너);

    const 카드앞면 = document.createElement('div');
    카드앞면.className = "card-front";
    카드이너.appendChild(카드앞면);

    const 카드뒷면 = document.createElement('div');
    카드뒷면.className = "card-back";
    카드뒷면.style.backgroundColor = 색깔[i];
    카드이너.appendChild(카드뒷면);


    (function(c) {
      c.addEventListener('click', function() {
        if (카드플래그 && !일치카드.includes(c)) {
          this.classList.toggle('flipped');
          선택카드.push(카드);
          if (선택카드.length === 2) {
            카드색깔비교(this);
          }
          if (일치카드.length === 12) {
            카드뒤집기초기화();
          }
        }
      });
    })(카드);
  }
}

// 무작위색깔지정
function 무작위색깔지정() {
  색깔후보 = 색깔들.slice();
  for (var i = 0; i < 색깔들.length; i+=1) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
  }
}

// 카드색깔비교
function 카드색깔비교(카드) {
  // 카드플래그 = false;
  var 먼저선택한카드색 = 선택카드[0].querySelector('.card-back').style.backgroundColor;
  var 다음선택한카드색 = 선택카드[1].querySelector('.card-back').style.backgroundColor;
  if (먼저선택한카드색 === 다음선택한카드색) { // 색이 일치하면,
    일치카드 = 일치카드.concat(선택카드.splice(0, 2));
  } else { // 색이 불일치하면,
    setTimeout(function() {
      선택카드.forEach(function(선택카드) {
        선택카드.classList.toggle('flipped');
        카드플래그 = true;
      });
      선택카드 = []; // 선택카드 초기화
    }, 1000);
    console.log(일치카드,선택카드);
  }

}

//실행버튼 클릭이벤트
function 카드전체뒤집기() {
  const 카드 = document.querySelectorAll('.card');
  카드.forEach(function(카드, 인덱스) {
    setTimeout(function() {
      카드.classList.toggle('flipped');
    }, 1000 + (100 * 인덱스));
  });
}

function cardGameStartHandler() {
  카드플래그 = false;
  카드전체뒤집기();
  setTimeout(function() {
    카드전체뒤집기();
    카드플래그 = true;
  }, 3000);
}

실행버튼.addEventListener('click', cardGameStartHandler);

// 초기화되기
function 카드뒤집기초기화() {
  카드전체뒤집기();
  색깔 = [];
  일치카드 = [];
  무작위색깔지정();
  setTimeout(function(){
    카드그룹.innerHTML = '';
    화면출력();
  }, 3000);
}

무작위색깔지정();
화면출력();


// 자스스톤
const 자스스톤 = document.querySelector('#자스스톤');
const 턴버튼 = document.querySelector('#turn-btn');

var 상대 = {
  영역: document.querySelector('#rival'),
  필드: document.querySelector('#rival-cards'),
  영웅: document.querySelector('#rival-hero'),
  덱: document.querySelector('#rival-deck'),
  코스트: document.querySelector('#rival-cost'),
  덱data: [],
  영웅data: [],
  필드data: [],
}

var 내 = {
  영역: document.querySelector('#my'),
  필드: document.querySelector('#my-cards'),
  영웅: document.querySelector('#my-hero'),
  덱: document.querySelector('#my-deck'),
  코스트: document.querySelector('#my-cost'),
  덱data: [],
  영웅data: [],
  필드data: [],
}

var 자스스톤턴 = true;

// 랜덤 데이터 생성
function Card(영웅, 내꺼){
  if (영웅) {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
  } else {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
  if (내꺼) {
    this.mine = true;
  }
}
function 카드공장(영웅, 내꺼){
  return new Card(영웅, 내꺼);
}

// 초기세팅
function 상대덱생성(개수){
  for (let i = 0; i < 개수; i+=1) {
    상대.덱data.push(카드공장());
  }

  // 데이터와 화면 싱크맞추기
  상대.덱.innerHTML = "";

  상대.덱data.forEach(function(data) {
    데이터와돔연결(data, 상대.덱);
  });
}
function 내덱생성(개수){
  for (let i = 0; i < 개수; i+=1) {
    내.덱data.push(카드공장(false, true));
  }
  // 데이터와 화면 싱크맞추기
  내.덱.innerHTML = "";

  내.덱data.forEach(function(data) {
    데이터와돔연결(data, 내.덱, false);
  });
}
function 상대영웅생성(개수){
  상대.영웅data = 카드공장(true);
  데이터와돔연결(상대.영웅data, 상대.영웅, true);
}
function 내영웅생성(개수){
  내.영웅data = 카드공장(true, true);
  데이터와돔연결(내.영웅data, 내.영웅, true, true);
}

function 데이터와돔연결(개별데이터, dom, 영웅) {
  // 화면출력
  var 카드 = document.querySelector(".card-hidden .card-js").cloneNode(true);
  카드.querySelector(".card-cost").textContent = 개별데이터.cost;
  카드.querySelector(".card-att").textContent = 개별데이터.att;
  카드.querySelector(".card-hp").textContent = 개별데이터.hp;
  dom.appendChild(카드);
  if (영웅) {
    카드.querySelector(".card-cost").style.display = 'none';
    var 이름 = document.createElement('div');
    이름.textContent = "이름";
    카드.appendChild(이름);
  }

  카드.addEventListener('click', function() {
    if (자스스톤턴) { // 내 턴이면,
      // 상대방 카드, 필드의 카드, 영웅카드 누름 방지
      if (!개별데이터.mine || 개별데이터.up || 개별데이터.hero) {
        return;
      } else { // 정상작동
        if (덱에서필드로(true, 개별데이터) != 'end') {
          내덱생성(1);
        }
      }
    } else { // 상태 턴이면,
      // 상대방 카드, 필드의 카드, 영웅카드 누름 방지
      if (개별데이터.mine || 개별데이터.up || 개별데이터.hero) {
        return;
      } else { // 정상작동
        if (덱에서필드로(false, 개별데이터) != 'end') {
          상대덱생성(1);
        }
      }
    }
  });
}

//덱에서 패널로 카드 이동
function 덱에서필드로(내턴, 선택된개별데이터) {
  var 객체 = 내턴 ? 내 : 상대;

  var 현재코스트 = 객체.코스트.textContent;

  if (현재코스트 < 선택된개별데이터.cost) {
    return 'end';
  }

  var index = 객체.덱data.indexOf(선택된개별데이터);
  객체.덱data.splice(index, 1);  // 필드에 올라갈 데이터 삭제
  객체.필드data.push(선택된개별데이터); // 필드에 올라가는 데이터 저장
  선택된개별데이터.up = true; // 필드에 올라감을 표시.

  // 화면 초기화
  객체.덱.innerHTML = "";
  객체.필드.innerHTML = "";

  // 코스트 감소
  객체.코스트.textContent = 현재코스트 - 선택된개별데이터.cost;

  // 변화된 데이터와 화면 싱크맞춰서 출력
  객체.덱data.forEach(data => {
    데이터와돔연결(data, 객체.덱);
  });
  객체.필드data.forEach(data => {
    데이터와돔연결(data, 객체.필드);
  });
}

// 턴 바꾸기
function 턴바꾸기() {
  자스스톤턴 = !자스스톤턴;
  if (자스스톤턴) {
    내.코스트.textContent = 10;
    내.영역.classList.add('turn');
    상대.영역.classList.remove('turn');
  } else {
    상대.코스트.textContent = 10;
    내.영역.classList.remove('turn');
    상대.영역.classList.add('turn');
  }
}

턴버튼.addEventListener('click', 턴바꾸기);


function 초기세팅() {
  상대덱생성(5);
  내덱생성(5);
  상대영웅생성();
  내영웅생성();
}
초기세팅();
