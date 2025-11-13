


// Carousel code (runs only on pages where carousel exists)
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (carousel && cards.length > 0) {

    // Automatically calculate card width including spacing
    let cardWidth = cards[0].offsetWidth + 20; // gap of 20px



    // Auto-slide every 4 seconds
    setInterval(() => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        });
    }, 4000);
}


// 
const animatedElements = document.querySelectorAll(".fade-in, .fade-up, .slide-left, .slide-right");

function revealAnimations() {
    animatedElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealAnimations);
revealAnimations();

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".next-page-btn, .prev-page-btn")
        .forEach(btn => btn.classList.add("show"));
});
