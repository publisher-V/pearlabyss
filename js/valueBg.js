const valueWrap = document.querySelector(".value-wrap");
const valueModal = document.querySelector(".value-modal");
const persist = document.querySelector(".persist");
const wild = document.querySelector(".wild");
const trust = document.querySelector(".trust");

function Bg1() {
  valueWrap.style.backgroundImage =
    "url(D:/개발/프로젝트/pearlabyss/imgs/intro_value_persist_bg.jpg)";
}

function Bg2() {
  valueWrap.style.backgroundImage =
    "url(D:/개발/프로젝트/pearlabyss/imgs/intro_value_wild_bg.jpg)";
}

function Bg3() {
  valueWrap.style.backgroundImage =
    "url(D:/개발/프로젝트/pearlabyss/imgs/intro_value_trust_bg.jpg)";
}

function Bgreturn() {
  valueWrap.style.backgroundImage =
    "url(D:/개발/프로젝트/pearlabyss/imgs/value-home.png)";
}

persist.addEventListener("mouseenter", Bg1);
wild.addEventListener("mouseenter", Bg2);
trust.addEventListener("mouseenter", Bg3);
valueModal.addEventListener("mouseenter", Bgreturn);
