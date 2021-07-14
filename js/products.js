'use strict';
loadCart();
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