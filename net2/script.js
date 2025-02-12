const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
      } else {
        nav.classList.remove('nav__black');
      }
    });
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? "block" : "none";
      });
      currentIndex = (currentIndex + 1) % slides.length;
      setTimeout(showSlides, 2000);
    }
    showSlides();
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-button");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});

