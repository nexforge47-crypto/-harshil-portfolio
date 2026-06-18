// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Role rotator (hero) ----
const roles = [
  "influencer marketing executive",
  "campaign manager",
  "meme crafter",
  "video editor",
  "sketch artist"
];
const rotatorEl = document.getElementById('roleRotator');
let roleIndex = 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (rotatorEl && !prefersReducedMotion) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    rotatorEl.style.opacity = 0;
    setTimeout(() => {
      rotatorEl.textContent = roles[roleIndex];
      rotatorEl.style.opacity = 1;
    }, 220);
  }, 2400);
  rotatorEl.style.transition = 'opacity .22s ease';
}

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  // fallback: just show everything
  revealEls.forEach(el => el.classList.add('in-view'));
}
