'use strict';
let totalEl;
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  // eslint-disable-next-line no-undef
  loadCart();
  clearCart();
  // eslint-disable-next-line no-undef
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // eslint-disable-next-line no-undef

  tbody.textContent = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


// TODO: Find the table body

// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR
let buttonEl;
let total = 0;
function showCart() {
  // eslint-disable-next-line no-undef
  for (let i = 0; i < cart.items.length; i++) {
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    let tdEl2 = document.createElement('td');
    let tdEl3 = document.createElement('td');
    let tdEl4 = document.createElement('td');
    let tdEl5 = document.createElement('td');
    let imgEl = document.createElement('img');
    imgEl.setAttribute('src', cart.items[i].product.image);
    tdEl1.appendChild(imgEl);
    imgEl.style.width = '50px';
    imgEl.style.height = '50px';

    tdEl5.textContent = '❌';
    tdEl5.style.cursor = 'pointer';
    // eslint-disable-next-line no-undef
    tdEl2.textContent = cart.items[i].product.name;
    tdEl2.style.textAlign = 'center';
    // eslint-disable-next-line no-undef
    tdEl3.textContent = cart.items[i].quantity;
   let inputTd= document.createElement('input');



    // let input = document.createElement('input');
    // input.setAttribute('type','number');
    // input.setAttribute('type','number');


    // eslint-disable-next-line no-undef
    tdEl4.textContent = cart.items[i].product.price;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    trEl.appendChild(tdEl4);
    trEl.appendChild(tdEl5);
    // eslint-disable-next-line no-undef
    tbody.appendChild(trEl);
  }
  for (let i = 0; i < cart.items.length; i++) {
    total = total + cart.items[i].product.price;
  }
  totalEl = document.createElement('h3');
  totalEl.setAttribute('id','totalprice');
  totalEl.textContent = 'Total : ' + total+'$';
  formContainer.appendChild(totalEl);
}

function setCartText(cart) {
  let total = document.getElementById('carttotal');
  total.textContent = ' ';
  let spanEl = document.createElement('span');
  spanEl.textContent = 'Cart ';
  let iEl = document.createElement('i');
  console.log(cart);
  iEl.classList.add('fas');
  iEl.classList.add('fa-shopping-cart');
  total.appendChild(spanEl);
  total.appendChild(iEl);
  let spanEl1 = document.createElement('span');
  spanEl1.textContent = ' ' + cart.items.length;
  total.appendChild(spanEl1);
}
buttonEl = document.getElementById('total');
buttonEl.textContent = 'check out';
buttonEl.addEventListener('click', cardForm);
let formContainer = document.getElementById('formcontainer');



function cardForm(event) {
  
  
  event.preventDefault();
  // let formEl = document.getElementById('form');
  let fieldEl = document.getElementById('field');
  let legendEl= document.createElement('legend');
  legendEl.textContent='PAYMENT DETAILS';
  legendEl.setAttribute('id','legend');
  fieldEl.appendChild(legendEl);
  let hrEl = document.createElement('hr');
  hrEl.setAttribute('id','hrjava');
  fieldEl.appendChild(hrEl);
  let divEl1= document.createElement('div');
  divEl1.setAttribute('id','firstin');
  fieldEl.appendChild(divEl1);
  let labelEl = document.createElement('label');
  labelEl.textContent = 'Credit Card Number';
  let inputEl = document.createElement('input');
  inputEl.setAttribute('id', 'creditnumber');
  inputEl.setAttribute('name', 'creditnumber');
  inputEl.setAttribute('type', 'number');
  inputEl.setAttribute('placeholder','Enter your credit card number');
  let divEl2= document.createElement('div');
  divEl2.setAttribute('id','secondin');
  fieldEl.appendChild(divEl2);
  let labelEl2 = document.createElement('label');
  labelEl2.textContent = 'Name';
  let inputEl2 = document.createElement('input');
  inputEl2.setAttribute('id', 'userName');
  inputEl2.setAttribute('name', 'userName');
  inputEl2.setAttribute('type', 'text');
  inputEl2.setAttribute('placeholder','Enter your name');
  let divEl3= document.createElement('div');
  divEl3.setAttribute('id','thirdin');
  fieldEl.appendChild(divEl3);
  let labelEl3 = document.createElement('label');
  labelEl3.textContent = 'Expiration Date';
  let inputEl3 = document.createElement('input');
  inputEl3.setAttribute('id', 'date');
  inputEl3.setAttribute('name', 'date');
  inputEl3.setAttribute('type', 'date');
  let divEl4= document.createElement('div');
  divEl4.setAttribute('id','fourthin');
  fieldEl.appendChild(divEl4);
  fieldEl.style.border='4px solid #113F67';
  fieldEl.style.padding='20px';
  fieldEl.style.borderRadius='30px';
  let labelEl4 = document.createElement('label');
  labelEl4.textContent = 'CVV';
  let inputEl4 = document.createElement('input');
  inputEl4.setAttribute('id', 'cvv');
  inputEl4.setAttribute('name', 'cvv');
  inputEl4.setAttribute('type', 'number');
  inputEl4.setAttribute('placeholder','Enter your CVV');
  // formEl.appendChild(fieldEl);
  divEl1.appendChild(labelEl);
  divEl1.appendChild(inputEl);
  divEl2.appendChild(labelEl2);
  divEl2.appendChild(inputEl2);
  divEl3.appendChild(labelEl3);
  divEl3.appendChild(inputEl3);
  divEl4.appendChild(labelEl4);
  divEl4.appendChild(inputEl4);
  let inputEl5 = document.createElement('input');
  // let divEl = document.getElementsByClassName('customAlert');
  inputEl5.setAttribute('type', 'submit');
  inputEl5.setAttribute('value', 'PAYMENT');
  inputEl5.setAttribute('id', 'submit');
  fieldEl.appendChild(inputEl5);
  inputEl5.addEventListener('click', clearLocalStorage);
  function clearLocalStorage(event) {
    localStorage.removeItem('cart');
    event.preventDefault();
    cart.items.length = 0;
    // cart.saveToLocalStorage();
    clearCart();
    Swal.fire({
      title: 'Success',
      text: 'Thank you for purchasing from us',
      icon: 'success',
      confirmButtonText: 'ok'
    });
    totalEl.textContent='';
    document.getElementById('newForm').reset();
  inputEl5.removeEventListener('click',clearLocalStorage);

    
  }
  buttonEl.removeEventListener('click', cardForm);
  
}














// This will initialize the page and draw the cart on screen
renderCart();
setCartText(cart);
