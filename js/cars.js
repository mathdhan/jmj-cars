// ===============================
// MODAL FUNCTIONALITY
// ===============================
const modal = document.getElementById("carModal");
const modalMainImg = document.getElementById("modalMainImg");
const modalThumbs = document.getElementById("modalThumbs");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// All view buttons
const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modalTitle.textContent = btn.dataset.title;
        modalDescription.textContent = btn.dataset.description;

        const images = btn.dataset.images.split(",");
        modalMainImg.src = images[0];

        modalThumbs.innerHTML = "";

        images.forEach(img => {
            const thumb = document.createElement("img");
            thumb.src = img;
            thumb.addEventListener("click", () => {
                modalMainImg.src = img;
            });
            modalThumbs.appendChild(thumb);
        });

        modal.style.display = "flex";
    });
});

// Close modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ===============================
// SEARCH FUNCTIONALITY (NEW)
// ===============================
const searchInput = document.getElementById("searchInput");
const cars = document.querySelectorAll(".car");

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();

    cars.forEach(car => {
        const title = car.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
});
