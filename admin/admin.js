const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.sidebar-backdrop');

function setMenu(open) {
  sidebar.classList.toggle('is-open', open);
  backdrop.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

backdrop.addEventListener('click', () => setMenu(false));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const now = new Date();
const today = document.querySelector('#today');
today.dateTime = now.toISOString().slice(0, 10);
today.textContent = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'
}).format(now);
document.querySelector('#year').textContent = now.getFullYear();
