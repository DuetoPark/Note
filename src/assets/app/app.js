// Copy ClickEvent
let noteMain = document.querySelector('.note-main');

function copyData(elem) {
  let dummy = document.createElement('textarea');
  document.body.append(dummy);
  dummy.value = elem.target.innerText;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert(dummy.value + '복사됨');
}

function copyHandler(e) {
  if (e.target.tagName === 'PRE') {
    copyData(e);
  }
}

noteMain.addEventListener('click', copyHandler);

//Modal
let modalGroups = document.querySelectorAll('.main-article-modal-group');
let modalDiv = document.querySelectorAll('.modal-code');
let showCodeButton = document.querySelector('.show-code-button');
let modalCloseButton = document.querySelector('.modal-close-button');

function openModal(target) {
  target.nextElementSibling.style.display = 'block';
}
function closeModal(target) {
  if (target.tagName === 'DIV') {
    target.style.display = 'none';
  }
}

function modalHandler(e) {
  if (e.target.className === showCodeButton.className) {
    openModal(e.target);
  } else {
    closeModal(e.target);
  }
}

for (let i = 0; i < modalGroups.length; i++) {
  modalGroups[i].addEventListener('click', modalHandler);
}

// Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    750
  );
});
