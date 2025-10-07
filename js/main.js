// Toggle mobile menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form validation
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const formMessage = document.querySelector('#formMessage');

    if (name && email && message) {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.color = '#009879';
      form.reset();
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
    }
  });
}
