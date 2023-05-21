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

const workHistory = document.querySelectorAll(".single-work-history");

const mobileNav = document.querySelectorAll(".mobile-nav");

const xBtn = document.querySelector(".x-btn");

const ulContainer = document.querySelector(".ul-container");

ulContainer.addEventListener("click", function () {
  ulContainer.classList.toggle("active");
});

mobileNav.forEach((item, i, arr) => {
  item.addEventListener("click", () => {
    nav.classList.toggle("active1");
    xBtn.classList.add("hidden");
    ham.classList.remove("hidden");
  });
});

ham.addEventListener("click", function () {
  nav.classList.toggle("active1");
  ham.classList.add("hidden");
  xBtn.classList.remove("hidden");
});

xBtn.addEventListener("click", function () {
  nav.classList.toggle("active1");
  ham.classList.remove("hidden");
  xBtn.classList.add("hidden");
});

// skillsNav.addEventListener("click", function () {
//   header.classList.add("active3");
//   skills.classList.add("active2");
//   nav.classList.remove("active1");
// });

// portNav.addEventListener("click", function () {
//   portfolio.classList.add("active");
//   nav.classList.remove("active1");
// });

// homeNav.addEventListener("click", function () {
//   header.classList.remove("active3");
//   skills.classList.remove("active2");
//   nav.classList.remove("active1");
// });

// meetBtn.addEventListener("click", function () {
//   header.style.display = "none";
//   skills.classList.add("active2");
// });

listItem.forEach((list, i, arr) => {
  list.addEventListener("click", function (e) {
    console.log(list);
    if (e.target.classList.contains("job1")) {
      // list.classList.add("active");
      arr[0].classList.add("active");
      arr[1].classList.remove("active");
      arr[2].classList.remove("active");
      arr[3].classList.remove("active");
      // arr[4].classList.remove("active");
      workHistory[0].classList.remove("hidden");
      workHistory[1].classList.add("hidden");
      workHistory[2].classList.add("hidden");
      workHistory[3].classList.add("hidden");
      // workHistory[4].classList.add("hidden");
    } else if (e.target.classList.contains("job2")) {
      arr[0].classList.remove("active");
      arr[1].classList.add("active");
      arr[2].classList.remove("active");
      arr[3].classList.remove("active");
      // arr[4].classList.remove("active");
      // list.classList.add("active");
      workHistory[0].classList.add("hidden");
      workHistory[1].classList.remove("hidden");
      workHistory[2].classList.add("hidden");
      workHistory[3].classList.add("hidden");
      // workHistory[4].classList.add("hidden");
    } else if (e.target.classList.contains("job3")) {
      arr[0].classList.remove("active");
      arr[1].classList.remove("active");
      arr[2].classList.add("active");
      arr[3].classList.remove("active");
      // arr[4].classList.remove("active");
      workHistory[0].classList.add("hidden");
      workHistory[1].classList.add("hidden");
      workHistory[2].classList.remove("hidden");
      workHistory[3].classList.add("hidden");
      // workHistory[4].classList.add("hidden");
    } else {
      arr[0].classList.remove("active");
      arr[1].classList.remove("active");
      arr[2].classList.remove("active");
      arr[3].classList.add("active");
      // arr[4].classList.remove("active");
      workHistory[0].classList.add("hidden");
      workHistory[1].classList.add("hidden");
      workHistory[2].classList.add("hidden");
      workHistory[3].classList.remove("hidden");
      // workHistory[4].classList.add("hidden");
    }
  });
});

// listItem.forEach((list, i) => {
//   list.addEventListener("click", function (e) {
//     if (e.target.classList.contains("job2")) {
//       list.classList.toggle("active");
//       workHistory[i].classList.toggle("hidden");
//     }
//   });
// });

// listItem.forEach((work, i) => {
//   work.addEventListener("click", function () {
//     work.classList.toggle("hidden");
//   });
// });

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

AOS.init({
  once: true, // Set the once option to true
});
