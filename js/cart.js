'use strict';
let totalEl;
let totalDiv = document.getElementById('totalResult');
let totalElResult = document.createElement('h3');
function renderCart() {
  // eslint-disable-next-line no-undef
  loadCart();
  clearCart();
  // eslint-disable-next-line no-undef
  showCart();
}
function clearCart() {
  tbody.textContent = '';
}
let cartTotalEl=document.getElementById('carttotal');
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

    let inputElTotal = document.createElement('input');
     inputElTotal.type='number';

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
    // tdEl3.textContent = cart.items[i].quantity;
    tdEl3.appendChild(inputElTotal);
    inputElTotal.defaultValue = cart.items[i].quantity;
    inputElTotal.addEventListener('change',reCalculateTotal);
    function reCalculateTotal(event){
    total = 0;


    
    for (let i = 0, row; row = tbody.rows[i]; i++) {

         total = total + cart.items[i].product.price * row.cells[2].childNodes[0].value ;
       
        
    }

  
       totalElResult.textContent = 'Total : ' + total+'$';
    }

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
  inputEl.required=true;
  inputEl.setAttribute('id', 'creditnumber');
  inputEl.setAttribute('name', 'creditnumber');
  inputEl.setAttribute('type', 'number');
  inputEl.setAttribute('placeholder','Enter your credit card number');
  inputEl.style.borderRadius='7px';
  inputEl.style.padding='5px';
  inputEl.style.width="50%";
  inputEl.style.margin='10px auto';
  let divEl2= document.createElement('div');
  divEl2.setAttribute('id','secondin');
  fieldEl.appendChild(divEl2);
  let labelEl2 = document.createElement('label');
  labelEl2.textContent = 'Name';
  let inputEl2 = document.createElement('input');
  inputEl2.required=true;
  inputEl2.setAttribute('id', 'userName');
  inputEl2.setAttribute('name', 'userName');
  inputEl2.setAttribute('type', 'text');
  inputEl2.setAttribute('placeholder','Enter your name');
  inputEl2.style.borderRadius='7px';
  inputEl2.style.padding='5px';
  inputEl2.style.width="50%";
  inputEl2.style.margin='10px auto';
  let divEl3= document.createElement('div');

  divEl3.setAttribute('id','thirdin');
  fieldEl.appendChild(divEl3);
  let labelEl3 = document.createElement('label');
  labelEl3.textContent = 'Expiration Date';
  let inputEl3 = document.createElement('input');
  inputEl3.required=true;
  inputEl3.setAttribute('id', 'date');
  inputEl3.setAttribute('name', 'date');
  inputEl3.setAttribute('type', 'date');
  inputEl3.style.borderRadius='7px';
  inputEl3.style.padding='5px';
  inputEl3.style.width="50%";
  inputEl3.style.margin='10px auto';
  let divEl4= document.createElement('div');
 
  divEl4.setAttribute('id','fourthin');
  fieldEl.appendChild(divEl4);
  fieldEl.style.border='4px solid #113F67';
  fieldEl.style.padding='20px';
  fieldEl.style.borderRadius='30px';
  let labelEl4 = document.createElement('label');
  labelEl4.textContent = 'CVV';
  let inputEl4 = document.createElement('input');
  inputEl4.required=true;
  inputEl4.setAttribute('id', 'cvv');
  inputEl4.setAttribute('name', 'cvv');
  inputEl4.setAttribute('type', 'number');
  inputEl4.setAttribute('placeholder','Enter your CVV');
  inputEl4.style.borderRadius='7px';
  inputEl4.style.padding='5px';
  inputEl4.style.width="50%";
  inputEl4.style.margin='10px auto';
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
  newForm.addEventListener('submit', clearLocalStorage);
  function clearLocalStorage(event) {
    event.preventDefault();

    cart.items.length = 0;
    // cart.saveToLocalStorage();
    clearCart();
  
    Swal.fire({
      title: 'Success',
      text: 'Thank you for purchasing from us',
      icon: 'success',
      confirmButtonText: 'ok'
    }).then(function(){
      window.location = '../index.html';
    });
    localStorage.removeItem('cart');

    totalEl.textContent='';
    
    document.getElementById('newForm').reset();
  inputEl5.removeEventListener('click',clearLocalStorage);

    
  }
  buttonEl.removeEventListener('click', cardForm);
  
}
function totalCalc(){
  totalDiv.textContent = '';

  // totalEl.setAttribute('id','totalprice');
totalElResult.style.width = '100px';
totalElResult.style.height = '100px';
  for (let i = 0; i < cart.items.length; i++) {
    total = total +cart.items[i].product.price;
  }

  totalElResult.textContent = 'Total : ' + total+'$';
  totalDiv.appendChild(totalElResult);
}
renderCart();
setCartText(cart);
totalCalc();
