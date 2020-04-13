var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".page-header__toggle");
navMain.classList.remove("main-nav--opened");
navToggle.classList.remove("page-header__toggle--close");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navToggle.classList.remove("page-header__toggle--close");
  } else {
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("page-header__toggle--close");
  }
});
