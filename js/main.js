// Hamburger toggle for mobile menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when any nav link is clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active"); // Close the menu
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



