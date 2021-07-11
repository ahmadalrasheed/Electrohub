'use strict';
let laptopProducts = [];
let phonesProducts = [];
let tvProducts = [];
let headphonesProducts = [];

let randomLaptopProducts = [];
let randomPhoneProducts = [];
let randomTvProducts = [];
let randomHeadPhoneProducts = [];

let rand = [];

let allProducts = [{ name: 'MSI', description: 'ahmad laptop', price: 300, image: 'images/laptop1.jpg', type: 'laptop' }, { name: 'HP', description: 'ahmad laptop', price: 200, image: 'images/laptop2.jpg', type: 'laptop' }, { name: 'Dell', description: 'ahmad laptop', price: 600, image: 'images/laptop3.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 550, image: 'images/laptop4.jpg', type: 'laptop' }, { name: 'MSI', description: 'ahmad laptop', price: 800, image: 'images/laptop5.jpg', type: 'laptop' }, { name: 'Dell', description: 'ahmad laptop', price: 500, image: 'images/laptop6.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 480, image: 'images/laptop7.jpg', type: 'laptop' }, { name: 'HP', description: 'ahmad laptop', price: 530, image: 'images/laptop8.jpg', type: 'laptop' }, { name: 'Lenovo', description: 'ahmad laptop', price: 630, image: 'images/laptop9.jpg', type: 'laptop' }, { name: 'MSI', description: 'ahmad laptop', price: 770, image: 'images/laptop10.jpg', type: 'laptop' }, { name: 'Dell', description: 'ahmad laptop', price: 670, image: 'images/laptop11.jpg', type: 'laptop' }, { name: 'HP', description: 'ahmad laptop', price: 730, image: 'images/laptop12.jpg', type: 'laptop' }, { name: 'MSI', description: 'ahmad laptop', price: 870, image: 'images/laptop13.jpg', type: 'laptop' }, { name: 'Dell', description: 'ahmad laptop', price: 770, image: 'images/laptop14.jpg', type: 'laptop' }, { name: 'MSI', description: 'ahmad laptop', price: 670, image: 'images/laptop15.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop16.jpg', type: 'laptop' }, { name: 'MSI', description: 'ahmad laptop', price: 570, image: 'images/laptop17.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 870, image: 'images/laptop18.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop19.jpg', type: 'laptop' }, { name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop20.jpg', type: 'laptop' },

{ name: 'Sony', description: 'Sony Headphone', price: 19, image: 'images/headphone1.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 29, image: 'images/headphone2.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone3.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 35, image: 'images/headphone4.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 39, image: 'images/headphone5.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone6.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 23, image: 'images/headphone7.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 49, image: 'images/headphone8.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 19, image: 'images/headphone9.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 25, image: 'images/headphone10.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 75, image: 'images/headphone11.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 59, image: 'images/headphone12.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 15, image: 'images/headphone13.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 89, image: 'images/headphone14.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 69, image: 'images/headphone15.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 27, image: 'images/headphone16.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 109, image: 'images/headphone17.jpg', type: 'headphone' },
{ name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone18.jpg', type: 'headphone' },
{ name: 'Sony', description: 'Sony Headphone', price: 9, image: 'images/headphone19.jpg', type: 'headphone' },
{ name: 'Marshall', description: 'Marshall Headphone', price: 150, image: 'images/headphone20.jpg', type: 'headphone' },

{ name: 'Hp', description: 'whatever', price: 450, image: 'images/tv1.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 500, image: 'images/tv2.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 380, image: 'images/tv3.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 670, image: 'images/tv4.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 420, image: 'images/tv5.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 450, image: 'images/tv6.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 510, image: 'images/tv7.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 520, image: 'images/tv8.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 450, image: 'images/tv9.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 390, image: 'images/tv10.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 560, image: 'images/tv11.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 600, image: 'images/tv12.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 620, image: 'images/tv13.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 780, image: 'images/tv14.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 480, image: 'images/tv15.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 515, image: 'images/tv16.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 499, image: 'images/tv17.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 530, image: 'images/tv18.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 470, image: 'images/tv19.jpg', type: 'tv' },
{ name: 'Hp', description: 'whatever', price: 655, image: 'images/tv20.jpg', type: 'tv' },

{ name: 'samsung', description: '200GB memory', price: 400, image: 'image/phone1.jpg', type: 'phone' }, { name: 'htc', description: '200GB memory', price: 300, image: 'image/phone2.jpg', type: 'phone' }, { name: 'Huawei', description: '200GB memory', price: 200, image: 'image/phone3.jpg', type: 'phone' }, { name: 'iphone', description: '200GB memory', price: 500, image: 'image/phone4.jpg', type: 'phone' }, { name: 'galaxyA71', description: '200GB memory', price: 600, image: 'image/phone5.jpg', type: 'phone' }, { name: 'samsungnote7', description: '200GB memory', price: 700, image: 'image/phone6.jpg', type: 'phone' }, { name: 'Nokia', description: '200GB memory', price: 150, image: 'image/phone7.jpg', type: 'phone' }, { name: 'samsung', description: '200GB memory', price: 500, image: 'image/phone8.jpg', type: 'phone' }, { name: 'iphone8', description: '200GB memory', price: 900, image: 'image/phone9.jpg', type: 'phone' }, { name: 'sony', description: '200GB memory', price: 550, image: 'image/phone10.jpg', type: 'phone' }, { name: 'galaxys9', description: '200GB memory', price: 700, image: 'image/phone11.jpg', type: 'phone' }, { name: 'iphone7', description: '200GB memory', price: 500, image: 'image/phone12.jpg', type: 'phone' }, { name: 'samsung', description: '200GB memory', price: 800, image: 'image/phone13.jpg', type: 'phone' }, { name: 'iphone6', description: '200GB memory', price: 650, image: 'image/phone14.jpg', type: 'phone' }, { name: 'samsung', description: '200GB memory', price: 250, image: 'image/phone15.jpg', type: 'phone' }, { name: 'iphone11', description: '200GB memory', price: 1000, image: 'image/phone16.jpg', type: 'phone' }, { name: 'htc', description: '200GB memory', price: 870, image: 'image/phone17.jpg', type: 'phone' }, { name: 'Nokia', description: '200GB memory', price: 3700, image: 'image/phone18.jpg', type: 'phone' }, { name: 'samsung', description: '200GB memory', price: 450, image: 'image/phone19.jpg', type: 'phone' }];

function Product(name, description, price, image, type) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.image = image;
  this.type = type;

  if (type == 'laptop') {
    laptopProducts.push(this)
  }
  if (type == 'phone') {
    phonesProducts.push(this)
  }
  if (type == 'tv') {
    tvProducts.push(this)
  }

  if (type == 'headphone') {
    headphonesProducts.push(this)
  }

}

function fillRandomArrays() {
  for (let i = 0; i < allProducts.length; i++) {
    new Product(allProducts[i].name, allProducts[i].description, allProducts[i].price, allProducts[i].image, allProducts[i].type)
  }
}
function random() {
  return Math.floor(Math.random() * 20)
}

function generateTwelveRandomIndexes() {
  let randIndex;
  for (let i = 0; i < 12; i++) {
    randIndex = random();
    while(rand.includes(randIndex)) {
      randIndex = random();
    }
    rand.push(randIndex);
    // console.log(rand);

  }

}
// console.log(rand);

fillRandomArrays();
generateTwelveRandomIndexes();


function generateTwelveRandomProduct() {

  for (let i = 0; i < rand.length; i++) {
    randomHeadPhoneProducts[i] = headphonesProducts[rand[i]];
    randomLaptopProducts[i] = laptopProducts[rand[i]];
    randomTvProducts[i] = tvProducts[rand[i]];
    randomPhoneProducts[i] = phonesProducts[rand[i]];
  }
}
// console.log(laptopProducts[0]);

generateTwelveRandomProduct();
console.log(randomPhoneProducts);
// sliders function



function renderRow(){
  let slide=document.getElementById('slide');
  for(let i=0;i<randomLaptopProducts.length;i++){
    let mainboxEl=document.createElement('div');
    let pEl=document.createElement('p');
    let divimageEl=document.createElement('div');
    let pEl2=document.createElement('p');
    let cartdiv=document.createElement('div');
    let imagecartEl=document.createElement('img')
    let priceEl=document.createElement('a');
    let addtocartEl=document.createElement('a');


    mainboxEl.appendChild(pEl);
    mainboxEl.appendChild(divimageEl);
    mainboxEl.appendChild(pEl2);
    mainboxEl.appendChild(cartdiv);
    divimageEl.appendChild(imagecartEl);
    mainboxEl.appendChild(priceEl);
    cartdiv.appendChild(addtocartEl)
    addtocartEl.textContent='add to cart'
    pEl.textContent=randomLaptopProducts[i].name;
    pEl2.textContent=randomLaptopProducts[i].description;
    imagecartEl.setAttribute('src',randomLaptopProducts[i].image)
    priceEl.textContent=`price ${randomLaptopProducts[i].price}`
    slide.appendChild(mainboxEl);
    mainboxEl.classList.add('mainbox');
    pEl.classList.add('new');
    divimageEl.classList.add('image1-box');
    pEl2.classList.add('details');
    priceEl.classList.add('price');
    cartdiv.classList.add('cart');



   

    
  }
}
renderRow()

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

    prev[i].addEventListener('click', function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener('click', function () {
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

prev.addEventListener('click', minusSlides);
next.addEventListener('click', plusSlides);

function plusSlides() {
  showSlides(++slideIndex);
}

function minusSlides() {
  showSlides(--slideIndex);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slides');
  // console.log(slideIndex);
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  // console.log(slideIndex);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';

}

