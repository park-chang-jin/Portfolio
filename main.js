"use strict";

//*** Make navbar transparent when it is on the top ***
// navbar에 높이를 불러옴
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; //getBoundingClientRect()은 브라우저에서 보여지는 width나 height를 가져옴, offsetWidth은 실제 넓이를 가져옴
// scroll될 때마다 불러온다
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
