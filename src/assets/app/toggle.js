const body = document.body;
const toggleButton = document.querySelector('.toggle-button');
const alertMode = document.querySelector('#page-mode-state');

function dayMode() {
  return body.getAttribute('class') === 'mode-day';
}

function setBodyClass() {
  body.setAttribute('class', dayMode() ? 'mode-night' : 'mode-day');
}

function changeAlert() {
  alertMode.textContent = dayMode() ? '야간 모드 켜짐' : '야간 모드 꺼짐';
}

function toggleHandler() {
  setBodyClass();
  changeAlert();
}

toggleButton.addEventListener('click', toggleHandler);
