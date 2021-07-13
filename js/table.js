'use strict';

let table = document.getElementById('table');
let tbody = document.getElementById('tbody');
table.addEventListener('click', removeItemFromCart);



// function removeItemFromCart(event) {

//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
//   // TODO: Save the cart back to local storage
//   // TODO: Re-draw the cart table

// }


function removeItemFromCart(event) {
  console.log(event.target);
  console.log(event.target.rowIndex);
  let row = event.target.parentNode;
  console.log(row.rowIndex);

  if (event.target.innerHTML=='❌'){
    cart.removeItem(row.rowIndex-1);
    // console.log(cart);
    table.deleteRow(row.rowIndex);
    cart.saveToLocalStorage();
  }

//   renderCart();
}
