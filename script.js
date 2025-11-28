// smooth scroll (if you prefer JS version instead of pure CSS)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetEl = document.querySelector(targetID);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      // optionally update URL
      // window.location.hash = targetID;
    }
  });
});

// build ratings
document.querySelectorAll('.rating').forEach(rEl => {
  const rating = Number(rEl.getAttribute('data-rating')) || 0;
  const max = 5;
  for (let i = 1; i <= max; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    if (i <= rating) {
      star.classList.add('star');
    }
    rEl.appendChild(star);
  }
});
