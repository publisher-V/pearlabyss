const footerLinkItem = document.querySelectorAll(".footer-link-item > a");

for (let i = 0; i < footerLinkItem.length; i++) {
  footerLinkItem[i].addEventListener("click", function () {
    event.preventDefault();
    this.classList.toggle("show");
  });
}
