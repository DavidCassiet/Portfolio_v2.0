const proyectsItems = document.querySelectorAll(".proyects__item");
const proyectsImgs = document.querySelectorAll(".proyects__img");
const proyectsDescriptions = document.querySelectorAll(
  ".proyects__item-textContainer"
);
let i = 0;
let proyectImg;
let proyectDescription;

proyectsItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    i = index;
    proyectsImgs[i].addEventListener("mouseenter", mouseEnter);
    proyectsImgs[i].addEventListener("mouseleave", mouseLeave);
  });
});

function mouseEnter() {
  setTimeout(() => {
    proyectsDescriptions[i].classList.add("img-hover");
  }, 100);
}
function mouseLeave() {
  proyectsImgs[i].removeEventListener("mouseenter", mouseEnter, false);
  proyectsDescriptions[i].classList.remove("img-hover");
  proyectsImgs[i].removeEventListener("mouseleave", mouseLeave);
}
