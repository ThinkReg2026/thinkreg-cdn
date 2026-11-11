/* ThinkREG — main.js */

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startTimer() {
  timer = setInterval(() => goTo(current + 1), 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    goTo(Number(dot.dataset.slide));
    startTimer();
  });
});

if (slides.length) startTimer();

// Mobile nav toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const nav     = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  const open = nav.classList.contains('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.querySelectorAll('span').forEach((s, i) => {
    if (open) {
      if (i === 0) s.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (i === 1) s.style.opacity = '0';
      if (i === 2) s.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      s.style.transform = '';
      s.style.opacity = '';
    }
  });
});

// Close nav when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// Intersection Observer — fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.prop-card, .service-card, .team-card, .cta-box'
).forEach(el => {
  el.classList.add('animate-in');
  observer.observe(el);
});

// Inject animation CSS dynamically (avoids flash before JS loads)
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .animate-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
