const contactButton = document.querySelector(".contact__button");

contactButton.addEventListener("click", () => {
  contactButton.classList.add("contact__button-active");
  setTimeout(() => {
    contactButton.classList.remove("contact__button-active");
  }, 500);
});
