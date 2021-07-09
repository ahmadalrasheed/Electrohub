'use strict';


let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click',minusSlides);
next.addEventListener('click',plusSlides);

function plusSlides() {
  showSlides(++slideIndex);
}

function minusSlides() {
  showSlides(--slideIndex);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slides');
  console.log(slideIndex);
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  console.log(slideIndex);
  for ( let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex-1].style.display = 'block';
}
