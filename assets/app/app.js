// Toggle ClickEvent
const toggleButton = document.querySelector('.toggle-button');
const toggleButtonAfter = document.querySelector('.toggle-button::after');
const typeElements = document.querySelectorAll('.type');
const backgroundWhiteElements = document.querySelectorAll('[class*=background-white]');
let transparentButton = document.querySelectorAll('.transparent-button');
const pageMenus = document.querySelectorAll('.note-header-nav-list-items > button');
const goToPageAnchors = document.querySelectorAll('.go-to-page-anchor');
let current = null;

function toggled () {
  document.body.classList.add('background-toggled');
  toggleButton.classList.add('new-style');
  for (let i=0; i<pageMenus.length; i++) {
    pageMenus[i].classList.add('menu-toggled');
  }
  for (let i=0; i<goToPageAnchors.length; i++) {
    goToPageAnchors[i].style.color = "#000";
  }

  current = document.body.classList.value;
  toggleButton.style.background = '#FFFFFF';

  if(typeElements.length>0) {
    for (let i=0; i<typeElements.length; i++) {
      typeElements[i].style.color = '#1F1F1F';
    }
  }

  if(backgroundWhiteElements.length>0) {
    for (let i=0; i<backgroundWhiteElements.length; i++) {
      backgroundWhiteElements[i].style.color = '#1F1F1F';
    }
  }

  if(transparentButton.length>0) {
    for (let i=0; i<transparentButton.length; i++) {
      transparentButton[i].classList.add('toggled-button');
    }
  }
}

function toggleInactive () {
  document.body.classList.remove('background-toggled');
  toggleButton.classList.remove('new-style');

  for (let i=0; i<pageMenus.length; i++) {
    pageMenus[i].classList.remove('menu-toggled');
  }

  current = null;
  toggleButton.style.background = '#525252';

  for (let i=0; i<transparentButton.length; i++) {
    transparentButton[i].classList.remove('toggled-button');
  }
}


let toggleHandler = function () {
  if (current === null) {
    toggled();
  } else {
    toggleInactive();
  }
}

toggleButton.addEventListener('click', toggleHandler);


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
