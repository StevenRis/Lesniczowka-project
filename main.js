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

// carousel code
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0];

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter <= 0) return;

  carouselSlide.style.transtion = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  console.log('click');
});

prevBtn.addEventListener('click', () => {
  carouselSlide.style.transtion = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName('mySlides');
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = 'flex';
//   }
//   x[slideIndex - 1].style.display = 'block';
// }
