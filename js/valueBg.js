const valueWrap = document.querySelector(".value-wrap");
const valueModal = document.querySelector(".value-modal");
const valueContent = document.querySelector(".value-wrap-content");
const persist = document.querySelector(".persist");
const wild = document.querySelector(".wild");
const trust = document.querySelector(".trust");

function Bg1() {
  valueWrap.style.backgroundImage = "url(imgs/intro_value_persist_bg.jpg)";
}

function Bg2() {
  valueWrap.style.backgroundImage = "url(imgs/intro_value_wild_bg.jpg)";
}

function Bg3() {
  valueWrap.style.backgroundImage = "url(imgs/intro_value_trust_bg.jpg)";
}

function Bgreturn() {
  valueWrap.style.backgroundImage = "url(imgs/value-home.png)";
}

persist.addEventListener("mouseenter", Bg1);
persist.addEventListener("mouseleave", Bgreturn);
wild.addEventListener("mouseenter", Bg2);
wild.addEventListener("mouseleave", Bgreturn);
trust.addEventListener("mouseenter", Bg3);
trust.addEventListener("mouseleave", Bgreturn);
