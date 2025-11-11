// ✅ Learn More button function
function learnMore() {
    alert("This button can redirect to another page or section!");
}


// ✅ Carousel code (runs only on pages where carousel exists)
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (carousel && cards.length > 0) {

    // Automatically calculate card width including spacing
    let cardWidth = cards[0].offsetWidth + 20; // gap of 20px

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: "smooth",
        });
    });

    // Auto-slide every 4 seconds
    setInterval(() => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        });
    }, 4000);
}


// ✅ Scroll-based reveal animation
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
