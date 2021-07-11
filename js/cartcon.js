'use strict';


const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  this.items.push(new CartItem(product,quantity));

};

Cart.prototype.saveToLocalStorage = function() {
  let data =JSON.stringify(this.items);
  localStorage.setItem('cart',data);

};



Cart.prototype.removeItem = function(item) {

  if (item > -1) {
    this.items.splice(item, 1);
  }


};





// Cart.prototype.removeItem = function(item) {
//   // TODO: Fill in this instance method to remove one item from the cart.
//   // Note: You will have to decide what kind of parameter to pass in here!
// };


const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};
