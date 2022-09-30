const header = document.querySelector("header");
const home = document.querySelector(".home-wrap, .about-home-wrap");

function headerBg() {
  let scrollY = window.scrollY;
  let sectionHeight = home.offsetHeight;
  if (scrollY > sectionHeight) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
}

window.addEventListener("scroll", headerBg);
