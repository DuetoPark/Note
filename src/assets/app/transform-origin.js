const transformExample = document.querySelector(".transform-origin-example");

function animationActive (target) {
  if(target.value === "1"){
    target.nextElementSibling.classList.add("transform-origin-center");
    window.setTimeout(function() {
      target.nextElementSibling.classList.remove("transform-origin-center");
    },3000);
  } else if (target.value === "2") {
    target.nextElementSibling.classList.add("transform-origin-top-right");
    window.setTimeout(function() {
      target.nextElementSibling.classList.remove("transform-origin-top-right");
    },3000);
  } else if (target.value === "3") {
    target.nextElementSibling.classList.add("transform-origin-bottom-left");
    window.setTimeout(function() {
      target.nextElementSibling.classList.remove("transform-origin-bottom-left");
    },3000);
  }
}

function animationHandler (e) {
  animationActive(e.target);
}

transformExample.addEventListener("click", animationHandler);
