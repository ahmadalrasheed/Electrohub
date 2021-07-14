/* eslint-disable no-undef */
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

let allProducts = [{ id: 1, name: 'MSI', description: 'ahmad laptop', price: 300, image: 'images/laptop1.jpg', type: 'laptop' },
  {id: 2, name: 'HP', description: 'ahmad laptop', price: 200, image: 'images/laptop2.jpg', type: 'laptop' }
  , {id: 3, name: 'Dell', description: 'ahmad laptop', price: 600, image: 'images/laptop3.jpg', type: 'laptop' },
  {id: 4, name: 'lenovo', description: 'ahmad laptop', price: 550, image: 'images/laptop4.jpg', type: 'laptop' }
  , {id: 5, name: 'MSI', description: 'ahmad laptop', price: 800, image: 'images/laptop5.jpg', type: 'laptop' },
  {id: 6, name: 'Dell', description: 'ahmad laptop', price: 500, image: 'images/laptop6.jpg', type: 'laptop' },
  {id: 7, name: 'lenovo', description: 'ahmad laptop', price: 480, image: 'images/laptop7.jpg', type: 'laptop' }, {id: 8, name: 'HP', description: 'ahmad laptop', price: 530, image: 'images/laptop8.jpg', type: 'laptop' },
  {id: 9, name: 'Lenovo', description: 'ahmad laptop', price: 630, image: 'images/laptop9.jpg', type: 'laptop' }, {id: 10, name: 'MSI', description: 'ahmad laptop', price: 770, image: 'images/laptop10.jpg', type: 'laptop' }, {id: 11, name: 'Dell', description: 'ahmad laptop', price: 670, image: 'images/laptop11.jpg', type: 'laptop' }, {id: 12, name: 'HP', description: 'ahmad laptop', price: 730, image: 'images/laptop12.jpg', type: 'laptop' },
  {id: 13, name: 'MSI', description: 'ahmad laptop', price: 870, image: 'images/laptop13.jpg', type: 'laptop' }, {id: 14, name: 'Dell', description: 'ahmad laptop', price: 770, image: 'images/laptop14.jpg', type: 'laptop' }, {id: 15, name: 'MSI', description: 'ahmad laptop', price: 670, image: 'images/laptop15.jpg', type: 'laptop' }, {id: 16, name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop16.jpg', type: 'laptop' }
  , {id: 17, name: 'MSI', description: 'ahmad laptop', price: 570, image: 'images/laptop17.jpg', type: 'laptop' }, {id: 18, name: 'lenovo', description: 'ahmad laptop', price: 870, image: 'images/laptop18.jpg', type: 'laptop' },
  {id: 19, name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop19.jpg', type: 'laptop' }
  , {id: 20, name: 'lenovo', description: 'ahmad laptop', price: 570, image: 'images/laptop20.jpg', type: 'laptop' },

  {id: 21, name: 'Sony', description: 'Sony Headphone', price: 19, image: 'images/headphone1.jpg', type: 'headphone' },
  {id: 22, name: 'Marshall', description: 'Marshall Headphone', price: 29, image: 'images/headphone2.jpg', type: 'headphone' },
  {id: 23, name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone3.jpg', type: 'headphone' },
  {id: 24, name: 'Sony', description: 'Sony Headphone', price: 35, image: 'images/headphone4.jpg', type: 'headphone' },
  {id: 25, name: 'Marshall', description: 'Marshall Headphone', price: 39, image: 'images/headphone5.jpg', type: 'headphone' },
  {id: 26, name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone6.jpg', type: 'headphone' },
  {id: 27, name: 'Sony', description: 'Sony Headphone', price: 23, image: 'images/headphone7.jpg', type: 'headphone' },
  {id: 28, name: 'Marshall', description: 'Marshall Headphone', price: 49, image: 'images/headphone8.jpg', type: 'headphone' },
  {id: 29, name: 'Redmi', description: 'Redmi Headphone', price: 19, image: 'images/headphone9.jpg', type: 'headphone' },
  {id: 30, name: 'Sony', description: 'Sony Headphone', price: 25, image: 'images/headphone10.jpg', type: 'headphone' },
  {id: 31, name: 'Marshall', description: 'Marshall Headphone', price: 75, image: 'images/headphone11.jpg', type: 'headphone' },
  {id: 32, name: 'Redmi', description: 'Redmi Headphone', price: 59, image: 'images/headphone12.jpg', type: 'headphone' },
  {id: 33, name: 'Sony', description: 'Sony Headphone', price: 15, image: 'images/headphone13.jpg', type: 'headphone' },
  {id: 34, name: 'Marshall', description: 'Marshall Headphone', price: 89, image: 'images/headphone14.jpg', type: 'headphone' },
  {id: 35, name: 'Redmi', description: 'Redmi Headphone', price: 69, image: 'images/headphone15.jpg', type: 'headphone' },
  {id: 36, name: 'Sony', description: 'Sony Headphone', price: 27, image: 'images/headphone16.jpg', type: 'headphone' },
  {id: 37, name: 'Marshall', description: 'Marshall Headphone', price: 109, image: 'images/headphone17.jpg', type: 'headphone' },
  {id: 38, name: 'Redmi', description: 'Redmi Headphone', price: 29, image: 'images/headphone18.jpg', type: 'headphone' },
  {id: 39, name: 'Sony', description: 'Sony Headphone', price: 9, image: 'images/headphone19.jpg', type: 'headphone' },
  {id: 40, name: 'Marshall', description: 'Marshall Headphone', price: 150, image: 'images/headphone20.jpg', type: 'headphone' },

  {id: 41, name: 'Hp', description: 'whatever', price: 450, image: 'images/tv1.jpg', type: 'tv' },
  {id: 42, name: 'Hp', description: 'whatever', price: 500, image: 'images/tv1.jpg', type: 'tv' },
  {id: 43, name: 'Hp', description: 'whatever', price: 380, image: 'images/tv3.jpg', type: 'tv' },
  {id: 44, name: 'Hp', description: 'whatever', price: 670, image: 'images/tv4.jpg', type: 'tv' },
  {id: 45, name: 'Hp', description: 'whatever', price: 420, image: 'images/tv5.jpg', type: 'tv' },
  {id: 46, name: 'Hp', description: 'whatever', price: 450, image: 'images/tv6.jpg', type: 'tv' },
  {id: 47, name: 'Hp', description: 'whatever', price: 510, image: 'images/tv7.jpg', type: 'tv' },
  {id: 48, name: 'Hp', description: 'whatever', price: 520, image: 'images/tv8.jpg', type: 'tv' },
  {id: 49, name: 'Hp', description: 'whatever', price: 450, image: 'images/tv9.jpg', type: 'tv' },
  {id: 50, name: 'Hp', description: 'whatever', price: 390, image: 'images/tv10.jpg', type: 'tv' },
  {id: 51, name: 'Hp', description: 'whatever', price: 560, image: 'images/tv11.jpg', type: 'tv' },
  {id: 52, name: 'Hp', description: 'whatever', price: 600, image: 'images/tv12.jpg', type: 'tv' },
  {id: 53, name: 'Hp', description: 'whatever', price: 620, image: 'images/tv13.jpg', type: 'tv' },
  {id: 54, name: 'Hp', description: 'whatever', price: 780, image: 'images/tv14.jpg', type: 'tv' },
  {id: 55, name: 'Hp', description: 'whatever', price: 480, image: 'images/tv15.jpg', type: 'tv' },
  {id: 56, name: 'Hp', description: 'whatever', price: 515, image: 'images/tv16.jpg', type: 'tv' },
  {id: 57, name: 'Hp', description: 'whatever', price: 499, image: 'images/tv17.jpg', type: 'tv' },
  {id: 58, name: 'Hp', description: 'whatever', price: 530, image: 'images/tv18.jpg', type: 'tv' },
  {id: 59, name: 'Hp', description: 'whatever', price: 470, image: 'images/tv19.jpg', type: 'tv' },
  {id: 60, name: 'Hp', description: 'whatever', price: 655, image: 'images/tv20.jpg', type: 'tv' },

  {id: 61, name: 'samsung', description: '200GB memory', price: 400, image: 'images/phone1.jpg', type: 'phone' }
  , {id: 62, name: 'htc', description: '200GB memory', price: 300, image: 'images/phone2.jpg', type: 'phone' },
  {id: 63, name: 'Huawei', description: '200GB memory', price: 200, image: 'images/phone3.jpg', type: 'phone' },
  {id: 64, name: 'iphone', description: '200GB memory', price: 500, image: 'images/phone4.jpg', type: 'phone' },
  {id: 65, name: 'iphone', description: '200GB memory', price: 500, image: 'images/phone4.jpg', type: 'phone' },
  {id: 66, name: 'samsungnote7', description: '200GB memory', price: 700, image: 'images/phone6.jpg', type: 'phone' },
  {id: 67, name: 'Nokia', description: '200GB memory', price: 150, image: 'images/phone7.jpg', type: 'phone' }, {id: 68, name: 'samsung', description: '200GB memory', price: 500, image: 'images/phone8.jpg', type: 'phone' }, { id: 69,name: 'iphone8', description: '200GB memory', price: 900, image: 'images/phone9.jpg', type: 'phone' },
  {id: 70, name: 'sony', description: '200GB memory', price: 550, image: 'images/phone10.jpg', type: 'phone' }, {id: 71, name: 'galaxys9', description: '200GB memory', price: 700, image: 'images/phone11.jpg', type: 'phone' },
  {id: 72, name: 'iphone7', description: '200GB memory', price: 500, image: 'images/phone12.jpg', type: 'phone' },
  {id: 73, name: 'samsung', description: '200GB memory', price: 800, image: 'images/phone13.jpg', type: 'phone' },
  {id: 74, name: 'iphone6', description: '200GB memory', price: 650, image: 'images/phone14.jpg', type: 'phone' },
  {id: 75, name: 'samsung', description: '200GB memory', price: 250, image: 'images/phone15.jpg', type: 'phone' },
  {id: 76, name: 'iphone11', description: '200GB memory', price: 1000, image: 'images/phone16.jpg', type: 'phone' },
  {id: 77, name: 'htc', description: '200GB memory', price: 870, image: 'images/phone17.jpg', type: 'phone' }, {id: 78, name: 'Nokia', description: '200GB memory', price: 3700, image: 'images/phone18.jpg', type: 'phone' },
  {id: 79, name: 'samsung', description: '200GB memory', price: 450, image: 'images/phone19.jpg', type: 'phone' },
  {id: 80, name: 'samsung', description: '200GB memory', price: 450, image: 'images/phone19.jpg', type: 'phone' }];

function Product(id, name, description, price, image, type) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.image = image;
  this.type = type;

  if (type === 'laptop') {
    laptopProducts.push(this);
  }
  if (type === 'phone') {
    phonesProducts.push(this);
  }
  if (type === 'tv') {
    tvProducts.push(this);
  }

  if (type === 'headphone') {
    headphonesProducts.push(this);
  }

}

function fillRandomArrays() {
  for (let i = 0; i < allProducts.length; i++) {
    new Product(allProducts[i].id,allProducts[i].name, allProducts[i].description, allProducts[i].price, allProducts[i].image, allProducts[i].type);
  }
}
function random() {
  return Math.floor(Math.random() * 20);
}

function generateTwelveRandomIndexes() {
  let randIndex;
  for (let i = 0; i < 12; i++) {
    randIndex = random();
    while (rand.includes(randIndex)) {
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



function renderRow(arr) {
  // let slide=document.getElementById('slide');
  let divEl = document.createElement('div');
  let h2El = document.createElement('h2');
  h2El.textContent = (arr[0].type+'s').toUpperCase();
  console.log(arr[0].type.toUpperCase());
  h2El.style.margin = '20px auto';
  h2El.style.textAlign = 'center';
  h2El.style.padding = '20px';
  h2El.style.color = 'white';
  h2El.style.background = '#113F67';
  h2El.style.width = '90%';
  h2El.style.fontSize='32px';
  h2El.style.marginBottom='30px';
  h2El.style.borderTopLeftRadius='50px';
  h2El.style.borderBottomRightRadius='50px';
  // h2El.style.backgroundImage='linear-gradient(#33353d, grey)';
  h2El.style.boxShadow='black 0 10px 10px';
  divEl.appendChild(h2El);


  let slidesContainer = document.getElementById('slidesContainer');

  slidesContainer.appendChild(divEl);
  let slide = document.createElement('div');
  let slider = document.createElement('div');
  slider.style.margin = '20px 20px';
  slider.style.background = '#ffffff';
  slider.setAttribute('id', 'slider' + arr[0].type);
  slide.setAttribute('id', 'slide' + arr[0].type);

  slide.classList.add('slide');
  slider.classList.add('slider');
  slider.appendChild(slide);
  console.log(slider.getAttribute('id'));


  for (let i = 0; i < arr.length; i++) {
    let mainboxEl = document.createElement('div');
    let pEl = document.createElement('p');
    let divimageEl = document.createElement('div');
    let pEl2 = document.createElement('p');
    let cartdiv = document.createElement('div');
    let imagecartEl = document.createElement('img');
    let priceEl = document.createElement('a');
    let addtocartEl = document.createElement('a');


    mainboxEl.appendChild(pEl);
    mainboxEl.appendChild(divimageEl);
    mainboxEl.appendChild(pEl2);

    divimageEl.appendChild(imagecartEl);
    mainboxEl.appendChild(priceEl);
    cartdiv.appendChild(addtocartEl);
    mainboxEl.appendChild(cartdiv);
    addtocartEl.textContent = 'add to cart';
    pEl.textContent = arr[i].name;
    console.log(arr[i].price);
    pEl2.textContent = arr[i].description;
    imagecartEl.setAttribute('src', arr[i].image);
    priceEl.textContent = `price: ${arr[i].price}$ `;

    mainboxEl.classList.add('mainbox');
    pEl.classList.add('new');
    divimageEl.classList.add('image1-box');
    pEl2.classList.add('details');
    priceEl.classList.add('price');
    cartdiv.classList.add('cart');
    addtocartEl.setAttribute('id',arr[i].id);
    slide.appendChild(mainboxEl);
  }
  let buttonPrev = document.createElement('button');
  buttonPrev.textContent = 'Prev';
  let buttonNext = document.createElement('button');
  buttonNext.textContent = 'Next';
  buttonPrev.classList.add('ctrl-btn');

  buttonPrev.classList.add('pro-prev' + arr[0].type);
  buttonPrev.classList.add('pro-prev');
  buttonNext.classList.add('ctrl-btn');
  buttonNext.classList.add('pro-next' + arr[0].type);
  buttonNext.classList.add('pro-next');
  slider.appendChild(buttonNext);
  slider.appendChild(buttonPrev);
  slider.style.marginBottom='50px'
  slidesContainer.appendChild(slider);

}

renderRow(randomLaptopProducts);
let sliderLaptop = document.getElementById('sliderlaptop');
let slideLaptop = document.getElementById('slidelaptop');
productScroll(sliderLaptop, slideLaptop, 'laptop');
renderRow(randomHeadPhoneProducts);
let sliderHeadphone = document.getElementById('sliderheadphone');
let slideHeadphone = document.getElementById('slideheadphone');
productScroll(sliderHeadphone, slideHeadphone, 'headphone');
renderRow(randomPhoneProducts);
let sliderPhone = document.getElementById('sliderphone');
let slidePhone = document.getElementById('slidephone');
productScroll(sliderPhone, slidePhone, 'phone');
renderRow(randomTvProducts);
let sliderTv = document.getElementById('slidertv');
let slideTv = document.getElementById('slidetv');
productScroll(sliderTv, slideTv, 'tv');




function assignIds(arr){

  for (let i = 0; i < arr.length; i++) {
    let addToCart=document.getElementById(arr[i].id);
    addToCart.addEventListener('click',fillTheCart);


  }
  function fillTheCart(event) {
    console.log(event.target.id);
    let id = Number(event.target.id);
    let index=findWithAttr(arr,'id',id);
    // eslint-disable-next-line no-undef

    // eslint-disable-next-line no-undef
    cart.addItem(arr[index], 1);
    // eslint-disable-next-line no-undef
    console.log(cart);
    // eslint-disable-next-line no-undef

    setCartText(cart);

    // console.log(cart.items);
    cart.saveToLocalStorage();
  }

}


// eslint-disable-next-line no-undef
loadCart();
assignIds(randomLaptopProducts);
assignIds(randomHeadPhoneProducts);
assignIds(randomPhoneProducts);
assignIds(randomTvProducts);

function findWithAttr(array, attr, value) {
  for(let i = 0; i < array.length; i += 1) {
    if(array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

function setCartText(cart) {
  let total = document.getElementById('carttotal');
  total.textContent = ' ';
  let spanEl = document.createElement('span');
  spanEl.textContent = 'Cart ';
  let iEl = document.createElement('i');
  iEl.classList.add('fas');
  iEl.classList.add('fa-shopping-cart');
  total.appendChild(spanEl);
  total.appendChild(iEl);
  let spanEl1 = document.createElement('span');
  spanEl1.textContent = ' ' + cart.items.length;
  total.appendChild(spanEl1);
}
setCartText(cart);






function productScroll(slider, slide, type) {
  // let slider = document.getElementById('slider');
  let next = document.getElementsByClassName('pro-next' + type);
  let prev = document.getElementsByClassName('pro-prev' + type);
  let item = slide;


  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener('click', function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position, slide); //translate items
      }
    });

    next[i].addEventListener('click', function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position, slide); //translate items
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

function translateX(position, slide) {
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
// let slideIndex = 1;
// // showSlides(slideIndex);

// let prev = document.getElementById('prev');
// let next = document.getElementById('next');

// prev.addEventListener('click', minusSlides);
// next.addEventListener('click', plusSlides);

// function plusSlides() {
//   showSlides(++slideIndex);
// }

// function minusSlides() {
//   showSlides(--slideIndex);
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName('slides');
//   // console.log(slideIndex);
//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length; }
//   // console.log(slideIndex);
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   slides[slideIndex - 1].style.display = 'block';

// }

let delay = 1500;
let sliderRadios = document.getElementsByName('slider');
let index=0;
let imageCount = sliderRadios.length;

setInterval(function(){
  index++;
  if(index>imageCount-1){
    index=0;
  }
  sliderRadios[index].click();
  console.log(sliderRadios[index].id);
},delay);