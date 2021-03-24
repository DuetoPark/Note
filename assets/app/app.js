// 야간 모드로 전환 이벤트
const body = document.body;
const toggleButton = document.querySelector('.toggle-button');
const transparentButtons = document.querySelectorAll('.transparent-button');
const pageMenus = document.querySelectorAll('.note-header-nav-list-items > button');
const goToPageAnchors = document.querySelectorAll('.go-to-page-anchor');
const pageModeState = document.querySelector("#page-mode-state");
let current = null;

function classListToggle() {
  body.classList.toggle('background-toggled');
  toggleButton.classList.toggle('button-toggled');
  pageMenus.forEach(pageMenu => pageMenu.classList.toggle('menu-toggled'));
  transparentButtons.forEach(button => button.classList.toggle('transparent-toggled'));

  pageModeState.textContent = !current ? "야간 모드 켜짐" : "야간 모드 꺼짐";
}
function toggled () {
  current = "켜짐";
  classListToggle();
}
function isNotToggled() {
  current = null;
  classListToggle();
}
function toggleHandler() {
  !current ? toggled() : isNotToggled();
}
toggleButton.addEventListener('click', toggleHandler);


// 네비게이션 조작
const tabButtons = document.querySelectorAll('.note-header-nav-list-items > button');
const navigations = document.querySelectorAll('[role=tabpanel]');
const navigationWrapper = document.querySelector('#go-to-pages');
const navigationCloseButton = document.querySelector('.go-to-pages-close');
const menuTitle = ['html', 'css', 'js'];
let isActived = false;

function toggleWrapper() {
  navigationWrapper.classList.toggle("hidden");
  navigationWrapper.classList.toggle("go-to-pages");
}

function showNavigation(elem) {
  // 모든 tabPanel 숨기기
  navigations.forEach(tabPanel => tabPanel.classList.add('hidden'));
  // 선택한 tabPanel 보여주기
  const tabname = elem.dataset.tabname;
  const isclicked = document.querySelector(`#go-to-page-div-${tabname}`);
  isclicked.classList.remove('hidden');
}

function tabHandler(e) {
  isActived = !isActived;
  if (isActived) {
    toggleWrapper();
    showNavigation(this);
  } else {
    toggleWrapper();
  }
}

function navigationCloseHandler(e) {
  const isPressedEscKey = isActived && e.keyCode === 27;
  const isClickedCloseButton = e.target === navigationCloseButton;
  if (isPressedEscKey || isClickedCloseButton) {
    toggleWrapper();
    isActived = !isActived;
  } else {
    return;
  }
}

navigationWrapper.addEventListener('click', navigationCloseHandler);
window.addEventListener('keyup', navigationCloseHandler);
tabButtons.forEach((button, index) => {
  button.setAttribute('data-tabname', menuTitle[index]);
  button.addEventListener('click', tabHandler);
});


// 탭 포커스 이동
let tabList = [];
function tabFocusHandler(e) {
  if (e.keyCode === 9) {
    const pageAnchors = document.querySelectorAll('a');
    const pageButtons = document.querySelectorAll('button');

    console.log(pageAnchors, pageButtons);
  }
}

window.addEventListener('keydown', tabFocusHandler);



// Copy ClickEvent
let noteMain = document.querySelector('.note-main');

function copyData (elem) {
  let dummy = document.createElement('textarea');
  document.body.append(dummy);
  dummy.value = elem.target.innerText;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert(dummy.value + '복사됨');
}

function copyHandler (e) {
  if (e.target.tagName === "PRE") {
    copyData(e);
  }
}

noteMain.addEventListener('click', copyHandler);



//Modal
let modalGroups = document.querySelectorAll('.main-article-modal-group');
let modalDiv = document.querySelectorAll('.modal-code');
let showCodeButton = document.querySelector('.show-code-button');
let modalCloseButton = document.querySelector('.modal-close-button');


function openModal (target){
  target.nextElementSibling.style.display = 'block';
}
function closeModal (target){
  if (target.tagName === 'DIV') {
    target.style.display = 'none';
  }
}

function modalHandler (e) {
  if (e.target.className === showCodeButton.className) {
    openModal(e.target);
  } else {
    closeModal(e.target);
  }
}

for(let i=0; i<modalGroups.length; i++){
  modalGroups[i].addEventListener('click', modalHandler);
}



// Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
});
