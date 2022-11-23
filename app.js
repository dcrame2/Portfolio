const ham = document.querySelector(".hamburger");

const nav = document.querySelector(".topnav");
const third = document.querySelector(".third-container");
const skillsNav = document.querySelector(".skills-nav");
const skills = document.querySelector(".skill-container");
const portNav = document.querySelector(".port-nav");
const portfolio = document.querySelector(".second-container");

const homeNav = document.querySelector(".home-nav");
const home = document.querySelector(".first-container");

const header = document.querySelector(".my-header");

const meetBtn = document.querySelector(".meet-btn");

const listItem = document.querySelectorAll(".list-item");

ham.addEventListener("click", function () {
  nav.classList.toggle("active1");
});

skillsNav.addEventListener("click", function () {
  header.classList.add("active3");
  skills.classList.add("active2");
  nav.classList.remove("active1");
});

portNav.addEventListener("click", function () {
  portfolio.classList.add("active");
  nav.classList.remove("active1");
});

homeNav.addEventListener("click", function () {
  header.classList.remove("active3");
  skills.classList.remove("active2");
  nav.classList.remove("active1");
});

meetBtn.addEventListener("click", function () {
  header.style.display = "none";
  skills.classList.add("active2");
});

listItem.forEach((list, i) => {
  list.addEventListener("click", function () {
    list.classList.toggle("active");
  });
});

//LOADER
// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 500);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.querySelector(".right-container").style.display = "block";
// }

window.addEventListener("load", AOS.refresh);
