const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.global-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.classList.remove('is-open');
  navigation.classList.remove('is-open');
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.classList.toggle('is-open', open);
  navigation.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();
