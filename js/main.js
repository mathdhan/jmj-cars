/* =========================
   MOBILE NAVIGATION
========================= */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close-menu");

/* Toggle menu (hamburger) */
if (hamburger) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent document click
        nav.classList.toggle("active");
    });
}

/* Close menu when clicking a link */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

/* Close via ✕ icon */
if (closeMenu) {
    closeMenu.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

/* Close when clicking outside */
document.addEventListener("click", (e) => {
    if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        nav.classList.remove("active");
    }
});

/* =========================
   STICKY HEADER ON SCROLL
========================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
