function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

function initFadeIn() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-width]');
  if (!bars.length) return;
  bars.forEach(b => b.style.width = '0');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.width; }, 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const msg = document.getElementById('successMsg');
  btn.textContent = '⏳ Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = '#3bc9a0';
    if (msg) msg.style.display = 'block';
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initSkillBars();
});