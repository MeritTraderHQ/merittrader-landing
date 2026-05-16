// Waitlist form — placeholder handler until Beehiiv embed is wired in
document.getElementById('waitlist-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'You\'re on the list.';
  btn.disabled = true;
  this.querySelector('input').disabled = true;
});

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
