'use strict';

let tvsdivEl=document.getElementById('tvsdisplay');

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
//   setCartText(cart);

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
        console.log(cart);
        // eslint-disable-next-line no-undef
      
        setCartText(cart);
      
        // console.log(cart.items);
        cart.saveToLocalStorage();
      }
  
  }


function renderlaptops(arr){
    // let slide=document.getElementById('slide');

  
    for(let i=0;i<arr.length;i++){
      let mainboxEl=document.createElement('div');
      let pEl=document.createElement('p');
      let divimageEl=document.createElement('div');
      let pEl2=document.createElement('p');
      let cartdiv=document.createElement('div');
      let imagecartEl=document.createElement('img');
      let priceEl=document.createElement('a');
      let addtocartEl=document.createElement('a');
  
  
      mainboxEl.appendChild(pEl);
      mainboxEl.appendChild(divimageEl);
      mainboxEl.appendChild(pEl2);
  
      divimageEl.appendChild(imagecartEl);
      mainboxEl.appendChild(priceEl);
      cartdiv.appendChild(addtocartEl);
      mainboxEl.appendChild(cartdiv);
      addtocartEl.textContent='add to cart';
      pEl.textContent=arr[i].name;
      console.log(arr[i].price);
      pEl2.textContent=arr[i].description;
      imagecartEl.setAttribute('src',arr[i].image);
      priceEl.textContent=`price: ${arr[i].price}$ `;
  
      mainboxEl.classList.add('mainbox');
      pEl.classList.add('new');
      divimageEl.classList.add('image1-box');
      pEl2.classList.add('details');
      priceEl.classList.add('price');
      cartdiv.classList.add('cart');
      addtocartEl.setAttribute('id',arr[i].id);
      mainboxEl.style.width='25%'
      tvsdivEl.appendChild(mainboxEl);
      
    }
    
  
    
  
  }
  renderlaptops(tvProducts);
  assignIds(tvProducts);
  

//   setCartText(cart);