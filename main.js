hamburger = document.querySelector("#hamburger");
navMenu = document.querySelector(".top-nav-container");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle('active')
});

// Sticky Navigation Logic
const navBar = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
});