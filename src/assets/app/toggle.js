// 야간 모드로 전환 이벤트
const body = document.body;
const toggleButton = document.querySelector('.toggle-button');
const transparentButtons = document.querySelectorAll('.transparent-button');
const pageMenus = document.querySelectorAll(
  '.note-header-nav-list-items > button'
);
const goToPageAnchors = document.querySelectorAll('.go-to-page-anchor');
const pageModeState = document.querySelector('#page-mode-state');
let current = null;

function classListToggle() {
  body.classList.toggle('background-toggled');
  toggleButton.classList.toggle('button-toggled');
  pageMenus.forEach((pageMenu) => pageMenu.classList.toggle('menu-toggled'));
  transparentButtons.forEach((button) =>
    button.classList.toggle('transparent-toggled')
  );

  pageModeState.textContent = !current ? '야간 모드 켜짐' : '야간 모드 꺼짐';
}
function toggled() {
  current = '켜짐';
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
