// Menu Toggle Button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector(".menu").classList.toggle("active");
    });
});

// Slider Code
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});
