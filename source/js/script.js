const buttonOpen = document.querySelector(".site-navigation__toggle--open");
const siteNavigation = document.querySelector(".site-navigation");
const buttonClose = document.querySelector(".site-navigation__toggle--close");
const feedbackForm = document.querySelector(".feedback__form");
const userName = feedbackForm.querySelector(".form__input--name");
const userSurname = feedbackForm.querySelector(".form__input--surname");
const userTelephone = feedbackForm.querySelector(".form__input--telephone");
const userEmail = feedbackForm.querySelector(".form__input--email");
const modalError = document.querySelector(".modal--error");
const modalErrorClose = modalError.querySelector(".modal__button--ok");
const modalSuccess = document.querySelector(".modal--success");
const modalSuccessClose = modalSuccess.querySelector(".modal__button--close");

buttonOpen.addEventListener("click", function () {
  siteNavigation.classList.add("site-navigation--opened");
});

buttonClose.addEventListener("click", function () {
  siteNavigation.classList.remove("site-navigation--opened");
});

let isStorageSupport = true;
let nameStorage = "";
let surnameStorage = "";

try {
  nameStorage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  surnameStorage = localStorage.getItem("userSurname");
} catch (err) {
  isStorageSupport = false;
}

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userSurname.value || !userTelephone.value || !userEmail.value) {
    evt.preventDefault();
    modalError.classList.add("modal--open");
  } else {
    modalSuccess.classList.add("modal--open");
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userSurname", userSurname.value);
    }
  }
});

modalErrorClose.addEventListener("click", function () {
  modalError.classList.remove("modal--open");
});

modalSuccessClose.addEventListener("click", function () {
  modalSuccess.classList.remove("modal--open");
});

