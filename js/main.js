// Hamburger toggle for mobile menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});

// Sticky header on scroll
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

