// hamburger menu code
const navLinks = document.querySelector('.nav-links_burger-menu');
const menuBtn = document.querySelector('.menu-btn__burger');
const navItem = document.querySelector('.nav-item');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navLinks.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('active');
    menuOpen = false;
  }
});

// copyright year
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById('year').innerHTML = year;
