const formInputs = document.querySelectorAll(".main-form input");
const iconsError = document.querySelectorAll(".icon-error");
const errorMsgs = document.querySelectorAll(".error-msg");

formInputs.forEach((item, index) => {
  item.addEventListener("invalid", (e) => {
    item.setCustomValidity(" ");

    iconsError[index].classList.remove("hidden");
    errorMsgs[index].classList.remove("hidden");
    item.classList.add("error-clr");
  });
});

formInputs.forEach((item, index) => {
  item.addEventListener("input", () => {
    item.setCustomValidity("");

    iconsError[index].classList.add("hidden");
    errorMsgs[index].classList.add("hidden");
    item.classList.remove("error-clr");
  });
});
