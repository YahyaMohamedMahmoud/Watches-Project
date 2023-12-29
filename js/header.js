// header to fixed style start
let header = document.getElementById("header");
let up = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY > 60) {
    header.classList.add("headerFixed");
    up.classList.add("show");
  } else {
    header.classList.remove("headerFixed");
    up.classList.remove("show");
  }
};

up.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// header to fixed style end