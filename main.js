"use strict";

//*** Make navbar transparent when it is on the top ***
// navbar에 높이를 불러옴
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; //getBoundingClientRect()은 브라우저에서 보여지는 width나 height를 가져옴, offsetWidth은 실제 넓이를 가져옴
// scroll될 때마다 Y축 높이를 불러온다
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// *** Handle scrolling when tapping on the navbar menu ***
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link); // html에 있는  data-link에 값이 나옴
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return; //link가 아닌 다른 부분 클릭 햇을때 반환
  }
  scrollIntoView(link);
});

// *** Handle click on "contact me" button on home ***
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// *** Make home slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// *** Show "arrow up" button when scrolling down ***
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// *** Handle click ont the "arrow up" button ***
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home"); // 점차적으로 스크롤링이 진행 되기 때문에 나중에 비동기화를 해줘야한다. 그리고 스크롤중 마우스 가 움직이면 중간에 멈춘다
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" }); //scrollIntoView:해당 element로 이동, behavior: "smooth": 부드럽게 그 위치고 가게 해줌
}
