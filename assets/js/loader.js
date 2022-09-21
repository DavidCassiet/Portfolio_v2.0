window.scroll = "false";
let body = document.querySelector("body");
body.style.overflow = "hidden";

window.onload = () => {
  let loading = document.querySelector(".loader-container");
  setTimeout(() => {
    setTimeout(() => {
      loading.style.opacity = "90%";
    }, 500);
    setTimeout(() => {
      loading.style.opacity = "70%";
    }, 520);
    setTimeout(() => {
      loading.style.opacity = "50%";
    }, 540);
    setTimeout(() => {
      loading.style.display = "none";
      body.style.overflow = "auto";
    }, 560);
  }, 3000);
};
