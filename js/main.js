document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAV ACTIVE LINK (FIXED)
    =============================== */
    const navLinks = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop();

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

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

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

    /* ===============================
       CAR FILTERS
    =============================== */
    const priceFilterBtn = document.getElementById("priceFilterBtn");
    const minInput = document.getElementById("minPrice");
    const maxInput = document.getElementById("maxPrice");
    const makeInput = document.getElementById("makeSearch");
    const modelInput = document.getElementById("modelSearch");
    const yearInput = document.getElementById("yearSearch");
    const cars = document.querySelectorAll(".car");

    function applyFilters() {
        const min = parseInt(minInput.value) || 0;
        const max = parseInt(maxInput.value) || Infinity;
        const makeVal = makeInput ? makeInput.value.toLowerCase() : "";
        const modelVal = modelInput ? modelInput.value.toLowerCase() : "";
        const yearVal = yearInput ? yearInput.value.toLowerCase() : "";

        cars.forEach(car => {
            const priceElement = car.querySelector(".price");
            const carMake = car.dataset.make?.toLowerCase() || "";
            const carModel = car.dataset.model?.toLowerCase() || "";
            const carYear = car.dataset.year?.toLowerCase() || "";

            // Price filter
            let pricePass = true;
            if (priceElement) {
                const price = parseInt(
                    priceElement.innerText.replace("£", "").replace(/,/g, "").trim()
                );
                pricePass = price >= min && price <= max;
            }

            // Other filters
            let makePass = !makeVal || carMake.includes(makeVal);
            let modelPass = !modelVal || carModel.includes(modelVal);
            let yearPass = !yearVal || carYear.includes(yearVal);

            // Show or hide car
            if (pricePass && makePass && modelPass && yearPass) {
                car.style.display = "";
            } else {
                car.style.display = "none";
            }
        });
    }

    // Button click still works
    if (priceFilterBtn) {
        priceFilterBtn.addEventListener("click", applyFilters);
    }

    // Real-time filtering for all inputs
    [minInput, maxInput, makeInput, modelInput, yearInput].forEach(input => {
        if (input) {
            input.addEventListener("input", applyFilters);
        }
    });

});
