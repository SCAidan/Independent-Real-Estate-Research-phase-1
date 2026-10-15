const button = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
if (button && nav) {
  function close() { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.textContent = 'Menu +'; }
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close −' : 'Menu +';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
