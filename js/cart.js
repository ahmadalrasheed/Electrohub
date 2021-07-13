'use strict';

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
 
  tbody.textContent='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


// TODO: Find the table body

// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR

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

// This will initialize the page and draw the cart on screen
renderCart();
setCartText(cart);
