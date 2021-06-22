const isBody = document.body.dataset.page || '';
const nav = document.querySelector('.nav');
const menuButtons = document.querySelectorAll('.menu-button');
const navCloseButton = document.querySelector('.nav-close');

const navData = state.nav;

let navCurrent;
const key = {
  esc: 27,
};

// NOTE: Nav 열기
function setNavClass(button) {
  const key = button.textContent.replace(/^\s+|\s+$/gm, ''); // 공백 삭제

  nav.classList.remove(`select-${navCurrent}`);
  nav.classList.add(`select-${key}`);

  navCurrent = key;
}

function setLink(link) {
  return isBody === 'index'
    ? `./src/pages/01-${navCurrent}/${link.id}-${link.href}.html`
    : `../01-${navCurrent}/${link.id}-${link.href}.html`;
}

function populateNavItems() {
  const ol = nav.querySelector(`.nav-${navCurrent} .nav-list`);
  const frag = document.createDocumentFragment();

  state.nav[navCurrent].forEach((link) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'nav-item');
    li.innerHTML = `<a href='${setLink(link)}'>${link.id}-${link.href}</a>`;

    frag.appendChild(li);
  });

  ol.appendChild(frag);
}

function focusCloseButton() {
  navCloseButton.focus();
}

function handleMenu(e) {
  setNavClass(e.currentTarget);
  populateNavItems();
  focusCloseButton();
}

menuButtons.forEach((button) => button.addEventListener('click', handleMenu));

// NOTE: Nav 닫기 - 클릭
function focusMenuButton() {
  menuButtons[0].focus();
}

function closeNav() {
  nav.classList.add('is-closed');
  setTimeout(function () {
    nav.classList.remove(`select-${navCurrent}`);
    nav.classList.remove('is-closed');
  }, 180); // 애니메이션 duration보다 짧게
  focusMenuButton();
}

navCloseButton.addEventListener('click', closeNav);

// NOTE: Nav 닫기 - esc키
function handleKeyDown(e) {
  if (e.keyCode === key.esc) {
    closeNav();
  }
}

window.addEventListener('keydown', handleKeyDown);
