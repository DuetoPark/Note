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
const tabButtons = document.querySelectorAll('[data-role=tab]');
const navigations = document.querySelectorAll('[data-role=tabpanel]');
const navigationWrapper = document.querySelector('#go-to-pages');
const navigationCloseButton = document.querySelector('.go-to-pages-close');
const navigationAllAnchors = document.querySelectorAll('nav a');
const menuTitle = ['html', 'css', 'javascript'];
let isActived = false;
let tabname;
let nextIndex = 0;
let tabList = [];
const keyCode = {
  esc: 27,
  tab: 9,
  enter: 13,
}

function toggleWrapper() {
  navigationWrapper.classList.toggle("hidden");
  navigationWrapper.classList.toggle("go-to-pages");

  const ariaHidden = navigationWrapper.getAttribute('aria-hidden');
  if (ariaHidden) {
    navigationWrapper.setAttribute('aria-hidden', false);
  } else {
    navigationWrapper.setAttribute('aria-hidden', true);
  }
}

function showNavigation(elem) {
  // 모든 tabPanel 숨기고 선택한 tabPanel 보여주기
  navigations.forEach(tabPanel => tabPanel.classList.add('hidden'));

  tabname = elem.dataset.tabname;
  const isclickedTab = navigationWrapper.querySelector(`#go-to-page-div-${tabname}`);
  isclickedTab.classList.remove('hidden');

  // 탭 포커스 이동할 요소들 저장
  tabList = [];
  nextIndex = 0;
  tabList.push(navigationCloseButton);
  const isGoingToShowItems = isclickedTab.querySelectorAll('a');
  isGoingToShowItems.forEach(item => tabList.push(item));
}

function navigationHandler() {
  isActived = !isActived;
  if (isActived) {
    toggleWrapper();
    showNavigation(this);
  } else {
    toggleWrapper();
  }
}

function closeNavigationHandler(e) {
  const isPressedEscKey = isActived && e.keyCode === keyCode.esc;
  const isClickedCloseButton = e.target && !e.keyCode;
  if (isPressedEscKey || isClickedCloseButton) {
    toggleWrapper();
    isActived = !isActived;
    tabname = "";
  } else {
    return;
  }
}

// 탭 포커스
function initializeTabIndex(isActived) {
  // nav의 모든 anchor 태그는 탭 금지, 선택한 탭의 anchor 태그는 탭 포커스 허용
  navigationAllAnchors.forEach(anchor => {anchor.setAttribute('tabIndex', -1)});
  navigationCloseButton.setAttribute('tabIndex', isActived ? 1 : -1);
  tabList.forEach(item => item.setAttribute('tabIndex', isActived ? 1 : -1));
}

function focusElement(event) {
  const currentIndex = tabList.indexOf(event.target);
  if (nextIndex != 0 && event.shiftKey) { // tab키 + shift 키 누르면,
    nextIndex = currentIndex;
    tabList[currentIndex].focus();
  } else {
    nextIndex += 1;
    if (nextIndex > tabList.length - 1) { // 탭 목록 마지막 요소에서 tab키 누르면,
      toggleWrapper();
      isActived = !isActived;
      initializeTabIndex(isActived);
      nextIndex = 0;
      tabname = '';
    } else {
      tabList[nextIndex].focus();
    }
  }
}
function tabFocusHandler(e) {
  if (!tabname) { // navigationWrapper가 열리기 전
    initializeTabIndex(isActived);
    return;
  } else if (e.keyCode === keyCode.tab) { // navigationWrapper가 열린 후
    initializeTabIndex(isActived);
    focusElement(e);
  }
}

navigationCloseButton.addEventListener('click', closeNavigationHandler);
window.addEventListener('keyup', closeNavigationHandler);

tabButtons.forEach((button, index) => {
  button.setAttribute('data-tabname', menuTitle[index]);
  button.addEventListener('click', navigationHandler);
});

window.addEventListener('keyup', tabFocusHandler);




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
