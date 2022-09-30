const language = document.querySelector(".res-language");
const languageUl = document.querySelector(".res-language ul");

function languageBox() {
  languageUl.classList.toggle("show");
}

language.addEventListener("click", languageBox);
