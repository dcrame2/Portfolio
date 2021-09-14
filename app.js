let ham = document.querySelector(".hamburger");
let nav = document.querySelector(".topnav");
// let third = document.querySelector(".third-container");
let skillsNav = document.querySelector(".skills-nav");
let skills = document.querySelector(".skill-container");
let portNav = document.querySelector(".port-nav");
let portfolio = document.querySelector(".second-container");


let homeNav = document.querySelector(".home-nav");
let home = document.querySelector(".first-container");

ham.addEventListener("click", function(){
    nav.classList.toggle("active1");
});

skillsNav.addEventListener("click", function()  {
    skills.classList.add("active");
    nav.classList.remove("active1");

});

portNav.addEventListener("click", function()  {
    portfolio.classList.add("active");
    nav.classList.remove("active1");

});

homeNav.addEventListener("click", function()  {
   home.classList.add("active");
    nav.classList.remove("active1");

});

















