const body = document.querySelector("body");
const drawer = document.querySelector(".drawer");
const gnbWrap = document.querySelector(".gnb-wrap");
const gnbItem = document.querySelector(".gnb-item");
const gnbItemTitle = document.querySelectorAll(".gnb-item-title");
const subBox = document.querySelector(".header-sub-box");

function drawerShow() {
  drawer.classList.toggle("active");
  gnbWrap.classList.toggle("show");
  body.classList.toggle("overflow");
}

drawer.addEventListener("click", drawerShow);
for (let i = 0; i < gnbItemTitle.length; i++) {
  gnbItemTitle[i].addEventListener("click", function () {
    event.preventDefault();
    this.classList.toggle("show");
  });
}
