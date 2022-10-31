'use strict';

//code needed to animate while scrolling
//the rest of the animarion will be handeled in css
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(el => observer.observe(el));

//modal window for frameworks

//show modal function
// const openModal = function () {};

//1st: tailwind modal window
const tailwind = document.querySelector('.cardTailwind');
const bootstrap = document.querySelector('.cardBootstrap');
const figma = document.querySelector('.cardFigma');
const modal1 = document.querySelector('.modalOne');
const modal2 = document.querySelector('.modalTwo');
const modal3 = document.querySelector('.modalThree');
const closeXbtn = document.querySelector('.closeModal-btn');
const body = document.querySelector('.body');

//open-close modal
tailwind.addEventListener('click', function () {
  modal1.classList.toggle('hideModal');
  modal2.classList.add('hideModal');
  modal3.classList.add('hideModal');
});
bootstrap.addEventListener('click', function () {
  modal2.classList.toggle('hideModal');
  modal1.classList.add('hideModal');
  modal3.classList.add('hideModal');
});
figma.addEventListener('click', function () {
  modal3.classList.toggle('hideModal');
  modal2.classList.add('hideModal');
  modal1.classList.add('hideModal');
});
