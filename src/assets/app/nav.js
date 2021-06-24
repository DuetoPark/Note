const isBody = document.body.dataset.page || '';
const nav = document.querySelector('.nav');
const menuButtons = document.querySelectorAll('.menu-button');
const navCloseButton = document.querySelector('.nav-close');

const navData = state.nav;

let selectedMenu;
const key = {
  esc: 27,
};

// NOTE: Nav 열기
function setLink(link) {
  let path;
  let pathLeft;
  let pathRight;
  let number;

  if (
    selectedMenu === 'atom' ||
    selectedMenu === 'git' ||
    selectedMenu === 'vscode'
  ) {
    number = '02';
  } else {
    number = '01';
  }

  pathRight = `${number}-${selectedMenu}/${link.id}-${link.href}.html`;

  if (isBody === 'index') {
    pathLeft = `./src/pages/`;
  } else {
    pathLeft = `../`;
  }

  path = [pathLeft, pathRight].join('');

  return path;
}

function saveSelectedMenu(button) {
  selectedMenu = button.textContent.replace(/^\s+|\s+$/gm, '');
}

function setNavClass() {
  nav.setAttribute('class', `nav select-${selectedMenu}`);
}

function populateNavItems() {
  const ol = nav.querySelector(`.nav-${selectedMenu} .nav-list`);
  const frag = document.createDocumentFragment();

  state.nav[selectedMenu].forEach((link) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'nav-item');
    li.innerHTML = `<a href='${setLink(link)}'>${link.id}-${link.href}</a>`;

    frag.appendChild(li);
  });

  ol.appendChild(frag);
}

function focusOnCloseButton() {
  navCloseButton.focus();
}

function handleMenu(e) {
  saveSelectedMenu(e.currentTarget);
  setNavClass();
  populateNavItems();
  focusOnCloseButton();
}

menuButtons.forEach((button) => button.addEventListener('click', handleMenu));

// NOTE: Nav 닫기 - 클릭
function closeNav() {
  nav.classList.add('is-closed');
  setTimeout(function () {
    nav.setAttribute('class', 'nav');
  }, 180); // 애니메이션 duration보다 짧게
  focusOnMenuButton();
}

function focusOnMenuButton() {
  menuButtons[0].focus();
}

navCloseButton.addEventListener('click', closeNav);

// NOTE: Nav 닫기 - esc키
function handleKeyDown(e) {
  if (e.keyCode === key.esc) {
    closeNav();
  }
}

window.addEventListener('keydown', handleKeyDown);
