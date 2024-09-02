const menuBtn = document.querySelector("#menu-btn");
const menuBtnClose = document.querySelector("#menu-btn-close");
const menuMobile = document.querySelector("#menu-mobile");
const body = document.querySelector("body");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.remove("translate-y-[-105%]");
  body.classList.add("overflow-hidden");
});

menuBtnClose.addEventListener("click", () => {
  menuMobile.classList.add("translate-y-[-105%]");
  body.classList.remove("overflow-hidden");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    menuMobile.classList.add("translate-y-[-105%]");
    body.classList.remove("overflow-hidden");
  });
});
