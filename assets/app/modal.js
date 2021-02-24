// main.html
// Go To Page Modal
const goToPages = document.querySelector(".go-to-pages");
let navList = document.querySelector(".note-header-nav-list");
const goToPageDiv = document.querySelectorAll(".go-to-page-div");
const close = document.querySelector(".go-to-pages-close");
let menuText = null;


let openMenuModal = function (target) {
  switch (menuText) {
    case "html":
      goToPageDiv[0].classList.remove("show-element");
      break;
    case "css":
      goToPageDiv[1].classList.remove("show-element");
      break;
    case "javascript":
      goToPageDiv[2].classList.remove("show-element");
      break;
  }

  menuText = target.textContent;
  goToPages.classList.add("modal-active");

  switch (menuText) {
    case "html":
      goToPageDiv[0].classList.add("show-element");

      break;
    case "css":
      goToPageDiv[1].classList.add("show-element");
      break;
    case "javascript":
      goToPageDiv[2].classList.add("show-element");
      break;
  }
}

let closeMenuModal = function (target) {
  goToPages.classList.add("modal-inactive");
  window.setTimeout(function () {
    goToPages.classList.remove("modal-active");
  }, 200);
  window.setTimeout(function () {
    goToPages.classList.remove("modal-inactive");
  }, 200);
}


function openMenuHandler (e) {
  if (e.target.tagName === "BUTTON") {
    openMenuModal(e.target);
  }
}

function closeMenuHandler () {
  closeMenuModal();
}

navList.addEventListener("click", openMenuHandler);
close.addEventListener("click", closeMenuHandler);
