// script.js

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const introVideo = document.getElementById('introVideo');
  const sections = document.querySelectorAll('.section');

  // Bloquear scroll mientras loader activo
  document.body.style.overflow = 'hidden';

  // Función para mostrar secciones con efecto fade/slide
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }

  // Ejecutar efecto en scroll y al cargar
  window.addEventListener('scroll', revealSections);
  revealSections();

  // Función para ocultar loader y habilitar scroll
  function hideLoader() {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.style.overflow = 'auto'; // desbloquea scroll
    }, 1000);
  }

  // Cuando el video termina, ocultar loader
  introVideo.addEventListener('ended', hideLoader);

  // Timeout por si el video no termina en 2 segundos, ocultar loader igual
  setTimeout(() => {
    if (loader.style.display !== 'none') {
      hideLoader();
    }
  }, 2000);

  // Permitir scroll al cargar la página (por si acaso)
  window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
  });
});
