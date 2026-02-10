document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAV ACTIVE LINK (FIXED)
    =============================== */
    const navLinks = document.querySelectorAll("nav a");

    let currentPage = window.location.pathname.split("/").pop();

    // Handle home page properly
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });


    /* ===============================
       HAMBURGER MENU
    =============================== */
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const closeMenu = document.querySelector(".close-menu");

    if (hamburger) {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("active");
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    }

    // Close menu when clicking link (mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (
            nav.classList.contains("active") &&
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            nav.classList.remove("active");
        }
    });


    /* ===============================
       STICKY HEADER
    =============================== */
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

});
