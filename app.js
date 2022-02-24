const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".topnav");
const third = document.querySelector(".third-container");
const skillsNav = document.querySelector(".skills-nav");
const skills = document.querySelector(".skill-container");
const portNav = document.querySelector(".port-nav");
const portfolio = document.querySelector(".second-container");

const homeNav = document.querySelector(".home-nav");
const home = document.querySelector(".first-container");

const meetBtn = document.querySelector(".meet-btn");

ham.addEventListener("click", function () {
  nav.classList.toggle("active1");
});

skillsNav.addEventListener("click", function () {
  skills.classList.add("active");
  nav.classList.remove("active1");
});

portNav.addEventListener("click", function () {
  portfolio.classList.add("active");
  nav.classList.remove("active1");
});

homeNav.addEventListener("click", function () {
  home.classList.add("active");
  nav.classList.remove("active1");
});

meetBtn.addEventListener("click", function () {
  home.style.display = "none";
  third.style.display = "block";
});

//LOADER
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector(".right-container").style.display = "block";
}
