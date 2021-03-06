'use strict';

let table = document.getElementById('table');
let tbody = document.getElementById('tbody');
table.addEventListener('click', removeItemFromCart);


function removeItemFromCart(event) {
  console.log(event.target);
  console.log(event.target.rowIndex);
  let row = event.target.parentNode;
  console.log(row.rowIndex);

  if (event.target.innerHTML=='❌'){
    cart.removeItem(row.rowIndex-1);
    // console.log(cart);
    cartTotalEl.textContent = ' ';
  let spanEl = document.createElement('span');
  spanEl.textContent = 'Cart ';
  let iEl = document.createElement('i');
  iEl.classList.add('fas');
  iEl.classList.add('fa-shopping-cart');
  cartTotalEl.appendChild(spanEl);
  cartTotalEl.appendChild(iEl);
  let spanEl1 = document.createElement('span');
  spanEl1.textContent = ' ' + cart.items.length;
  cartTotalEl.appendChild(spanEl1);
    table.deleteRow(row.rowIndex);
    location.reload();
    cart.saveToLocalStorage();
  }

}
