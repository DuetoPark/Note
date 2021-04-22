// Flip 이벤트 (17-perspective)
const cards = document.querySelectorAll('.cards > div');

function flipCard() {
  this.classList.toggle('flipped');
}

cards.forEach(card => card.addEventListener('click', flipCard));
