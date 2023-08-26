const slider = document.querySelector(".slider");
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slider img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Cambia de imagen cada 4 segundos
}

showSlides();
