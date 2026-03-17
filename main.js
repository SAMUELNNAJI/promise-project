hamburger = document.querySelector("#hamburger");
navMenu = document.querySelector(".top-nav-container");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle('active')
});