const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list-link');
const overlayToggle = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  document.body.classList.toggle('noscroll');
  overlayToggle.classList.toggle('fade-in');
  overlayToggle.classList.toggle('fade-out');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    document.body.classList.remove('noscroll');
    overlayToggle.classList.remove('fade-in');
    overlayToggle.classList.add('fade-out');
  })
})