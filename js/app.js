'use strict';

// alert('Electronics website');
let slide = document.getElementById('slide');
productScroll();

function productScroll() {
  let slider = document.getElementById('slider');
  let next = document.getElementsByClassName('pro-next');
  let prev = document.getElementsByClassName('pro-prev');

  let item = document.getElementById('slide');

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener('click', function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener('click', function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 295;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  // eslint-disable-next-line no-undef
  slide.style.left = position * -295 + 'px';
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType !== 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;


}
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

