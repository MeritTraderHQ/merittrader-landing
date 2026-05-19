const BEEHIIV_FORM_ID = '27366f69-427c-42e4-ac99-120e1bd9bb2b';

document.getElementById('waitlist-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('waitlist-email').value.trim();
  const btn = this.querySelector('button');
  const msg = document.getElementById('waitlist-message');

  if (!email) return;

  btn.disabled = true;
  btn.textContent = 'Joining…';

  try {
    const res = await fetch(`https://embeds.beehiiv.com/api/v1/forms/${BEEHIIV_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, utm_source: 'website' }),
    });

    if (res.ok) {
      msg.style.color = 'var(--green)';
      msg.textContent = "You're on the list. We'll be in touch.";
      btn.textContent = 'You\'re in.';
      this.querySelector('input').disabled = true;
    } else {
      throw new Error('non-2xx');
    }
  } catch {
    msg.style.color = 'var(--red)';
    msg.textContent = 'Something went wrong. Please try again.';
    btn.disabled = false;
    btn.textContent = 'Get Early Access';
  }
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
