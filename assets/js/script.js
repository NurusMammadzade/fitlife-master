const join = document.querySelector(".btn-secondary");
const started = document.querySelector(".btn-primary");

// const home = document.querySelectorAll(".navbar-list")[0,1];
// const about = document.querySelectorAll(".navbar-list")[0];
// const claasses = document.querySelectorAll('selector')[3];
// const blog = document.querySelectorAll(".navbar-list")[4];
// const contact = document.querySelectorAll(".navbar-list")[5];
// console.log(home);
const weight = document.querySelectorAll(".h3")[0];


const explore = document.querySelectorAll(".btn-primary")[1];


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}




const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);





const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




join.innerHTML.href = "./register.html";
started.innerHTML.href = "/index.html#class";
explore.innerHTML.href = "/exploremore.html"





value = weight.children[0];
value.innerHTML.href="/weightlifting.html"










const cardTitle = document.querySelectorAll(".card-content");
title = cardTitle.children[0];
console.log(title);











