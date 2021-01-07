const buttonOpen = document.querySelector(".site-navigation__toggle--open");
const siteNavigation = document.querySelector(".site-navigation");
const buttonClose = document.querySelector(".site-navigation__toggle--close");

buttonOpen.addEventListener("click", function () {
  siteNavigation.classList.add("site-navigation--opened");
});

buttonClose.addEventListener("click", function () {
  siteNavigation.classList.remove("site-navigation--opened");
});
