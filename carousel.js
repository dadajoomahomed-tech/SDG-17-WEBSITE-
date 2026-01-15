document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if(!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img,i) => img.style.display = i === index ? "block" : "none");
  }

  function nextImage() {
    currentIndex = (currentIndex+1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex-1+images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  document.addEventListener("keydown", e => {
    if(e.key === "ArrowRight") nextImage();
    if(e.key === "ArrowLeft") prevImage();
  });

  showImage(currentIndex);
});
