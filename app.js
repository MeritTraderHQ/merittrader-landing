// Scroll fade-up animations — triggers once per element
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// Hero screenshot mouse-tilt
const heroVisual = document.querySelector('.hero__visual');
const heroTilt   = document.querySelector('.hero__tilt');
if (heroVisual && heroTilt) {
  heroVisual.addEventListener('mousemove', e => {
    const r = heroVisual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    heroTilt.style.transform =
      `perspective(1400px) rotateY(${-7 + x * 12}deg) rotateX(${3 - y * 9}deg)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    heroTilt.style.transform = '';
  });
}
