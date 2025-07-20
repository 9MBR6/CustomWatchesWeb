document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica del Carrusel ---
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que se active el enlace de la tarjeta
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que se active el enlace de la tarjeta
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    });
  });


  // --- Lógica del Botón Volver Arriba ---
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});