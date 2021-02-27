// main.html
// Go To Page Modal
const goToPages = document.querySelector("#go-to-pages");
let navList = document.querySelector(".note-header-nav-list");
const goToPageDiv = document.querySelectorAll(".go-to-page-div");
const close = document.querySelector(".go-to-pages-close");
let menuText = "";
let navKeys = Object.keys(state.네비게이션);

// 모달 열기 함수
let openMenuModal = function (target) {
  menuText = target.textContent;

  goToPages.classList.remove("hidden");
  goToPages.classList.add("go-to-pages");

  for (let i=0; i<goToPageDiv.length; i+=1) {  // 모든 모달 내용 숨기기
    goToPageDiv[i].classList.add("hidden");
  }

  if (navKeys.indexOf(menuText) > -1) { // 클릭한 주제의 모달 내용만 보이기
    goToPageDiv[navKeys.indexOf(menuText)].classList.remove("hidden");
  }
}

// 모달 닫기 함수
let closeMenuModal = function (target) {
  goToPages.classList.add("modal-close");

  window.setTimeout(function () {
    goToPages.classList.remove("modal-close", "go-to-pages");
    goToPages.classList.add("hidden");
    for (let i=0; i<goToPageDiv.length; i+=1){
      goToPageDiv[i].classList.add("hidden");
    }
  }, 200);
}

// 모달 열기 핸들러
function goToPagesHandler (e) {
  if (navKeys.indexOf(e.target.textContent) > -1) {
    openMenuModal(e.target);
  }
}

// 모달 닫기 핸들러
function closeMenuHandler () {
  closeMenuModal();
}

navList.addEventListener("click", goToPagesHandler);
close.addEventListener("click", closeMenuHandler);
