const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.global-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.classList.toggle('is-open');
  navigation.classList.toggle('is-open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.classList.remove('is-open');
    navigation.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

const nectarTrack = document.querySelector('.nectar-track');
const nectarPrev = document.querySelector('.slider-prev');
const nectarNext = document.querySelector('.slider-next');

function moveNectarSlider(direction) {
  const card = nectarTrack.querySelector('.nectar-card');
  const gap = 18;
  nectarTrack.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
}

nectarPrev.addEventListener('click', () => moveNectarSlider(-1));
nectarNext.addEventListener('click', () => moveNectarSlider(1));

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('第一案のため、フォームの送信機能はまだ接続されていません。');
});
