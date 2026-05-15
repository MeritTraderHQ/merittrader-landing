// Waitlist form — placeholder handler until Beehiiv embed is wired in
document.getElementById('waitlist-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'You\'re on the list.';
  btn.disabled = true;
  this.querySelector('input').disabled = true;
});
