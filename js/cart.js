'use strict';

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  // eslint-disable-next-line no-undef
  loadCart();
  clearCart();
  // eslint-disable-next-line no-undef
  showCart();
}
let tfootEl= document.getElementById('tfoot');
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // eslint-disable-next-line no-undef

  tbody.textContent='';
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
  for(let i =0;i<cart.items.length;i++){
    let trEl=document.createElement('tr');
    let tdEl1=document.createElement('td');
    let tdEl2=document.createElement('td');
    let tdEl3=document.createElement('td');
    let tdEl4=document.createElement('td');
    let tdEl5 =document.createElement('td');
    let imgEl =document.createElement('img');
    imgEl.setAttribute('src',cart.items[i].product.image);
    tdEl1.appendChild(imgEl);
    imgEl.style.width='50px';
    imgEl.style.height='50px';

    tdEl5.textContent='❌';
    tdEl5.style.cursor='pointer';
    // eslint-disable-next-line no-undef
    tdEl2.textContent=cart.items[i].product.name;
    tdEl2.style.textAlign='center';
    // eslint-disable-next-line no-undef
    tdEl3.textContent=cart.items[i].quantity;



    // let input = document.createElement('input');
    // input.setAttribute('type','number');
    // input.setAttribute('type','number');


    // eslint-disable-next-line no-undef
    tdEl4.textContent=cart.items[i].product.price;
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
buttonEl.textContent= 'check out';
buttonEl.addEventListener('click', cardForm);

function cardForm (event) {
  let formContainer=document.getElementById('formcontainer');
  for ( let i=0; i<cart.items.length; i++) {
    total=total+cart.items[i].product.price;}
  let totalEl = document.createElement('h3');
  totalEl.textContent='Your total price is '+ total;
  formContainer.appendChild(totalEl);
  event.preventDefault();
  // let formEl = document.getElementById('form');
  let fieldEl = document.getElementById('field');
  let labelEl = document.createElement('label');
  labelEl.textContent='credit card number';
  let inputEl = document.createElement('input');
  inputEl.setAttribute('id','creditnumber');
  inputEl.setAttribute('name','creditnumber');
  inputEl.setAttribute('type','number');
  // inputEl.setAttribute('placeholder','enter cre')

  let labelEl2 = document.createElement('label');
  labelEl2.textContent= 'name';
  let inputEl2 = document.createElement('input');
  inputEl2.setAttribute('id','userName');
  inputEl2.setAttribute('name','userName');
  inputEl2.setAttribute('type','text');

  let labelEl3 = document.createElement('label');
  labelEl3.textContent='Expiration date';
  let inputEl3 = document.createElement('input');
  inputEl3.setAttribute('id','date');
  inputEl3.setAttribute('name','date');
  inputEl3.setAttribute('type','date');
  let labelEl4 = document.createElement('label');
  labelEl4.textContent='CVV';
  let inputEl4 = document.createElement('input');
  inputEl4.setAttribute('id','cvv');
  inputEl4.setAttribute('name','cvv');
  inputEl4.setAttribute('type','number');
  // formEl.appendChild(fieldEl);
  fieldEl.appendChild(labelEl);
  fieldEl.appendChild(inputEl);
  fieldEl.appendChild(labelEl2);
  fieldEl.appendChild(inputEl2);
  fieldEl.appendChild(labelEl3);
  fieldEl.appendChild(inputEl3);
  fieldEl.appendChild(labelEl4);
  fieldEl.appendChild(inputEl4);
  let inputEl5 = document.createElement('input');
  // let divEl = document.getElementsByClassName('customAlert');
  inputEl5.setAttribute('type','submit');
  inputEl5.setAttribute('value','submit');
  fieldEl.appendChild(inputEl5);
  inputEl5.addEventListener('click', clearLocalStorage);
 




  function clearLocalStorage(event){
  localStorage.removeItem('cart');
    cart.items.length=0;
    event.preventDefault();
    Swal.fire({
      title: 'Success',
      text: 'Thank you for purchasing from us',
      icon: 'success',
      confirmButtonText: 'ok'
    });
    
  
  
  }

}














// This will initialize the page and draw the cart on screen
renderCart();
setCartText(cart);
