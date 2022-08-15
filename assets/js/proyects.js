const proyectsItems = document.querySelectorAll(".proyects__item");
const proyectsImgs = document.querySelectorAll(".proyects__img");
const proyectsDescriptions = document.querySelectorAll(
  ".proyects__item-textContainer"
);
let i = 0;

proyectsItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    i = index;
    proyectsImgs[i].addEventListener("mouseenter", mouseOver);
    proyectsImgs[i].addEventListener("mouseleave", mouseLeave);
  });
});

function mouseOver() {
  const style = window.getComputedStyle(proyectsImgs[i]);
  proyectsImgs[i].style.minWidth = "100%";

  // while (proyectsImgs[i].clientWidth != proyectsItems[i].clientWidth) {
  //   console.log(proyectsImgs[i].clientWidth);
  //   console.log(proyectsItems[i].clientWidth);
  // }

  // proyectsDescriptions[i].style.opacity = "100%";

  // callBackF(proyectsImgs[i].clientWidth);

  // while (
  //   proyectsImgs[i].clientWidth ==
  //   proyectsItems[i].clientWidth -
  //     parseInt(style.getPropertyValue("border-width")) * 2
  // ) {
  // proyectsDescriptions[i].style.opacity = "100%";
  //   break;
  // }
}
function mouseLeave() {
  proyectsImgs[i].removeEventListener("mouseover", mouseOver, false);
  proyectsImgs[i].style.minWidth = "80%";
  // proyectsDescriptions[i].style.opacity = "0%";
  // proyectsDescriptions[i].style.opacity = "0%";
  proyectsImgs[i].removeEventListener("mouseleave", mouseLeave);
}

// function callBackF(param) {
//   if (param == proyectsItems[i].clientWidth) {
//     proyectsDescriptions[i].style.display = "flex";
//   } else {
//     return callBackF(param);
//   }
// }
