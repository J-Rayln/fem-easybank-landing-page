const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list-link');
const overlayToggle = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  overlayToggle.classList.toggle('fade-in');
  overlayToggle.classList.toggle('fade-out');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    overlayToggle.classList.remove('fade-in');
    overlayToggle.classList.add('fade-out');
  })
})