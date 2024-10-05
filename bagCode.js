import {cartLog} from "./cart-Items.js";
import {QuantityControllerFunction} from "./cart-Items.js";

const bagWrapper = document.querySelector('.BagWrapper');
const bagLog = [];


function bagLogFunc(){

  


    
   cartLog.forEach((item)=>{
      const cartItems = productLog
      .filter((product)=> product.id === item.itemId)
      .map((product)=>{ return {
         ...product,
         price: parseInt(product.price.replace(/,/g,''))  * item.itemQuantity,
         quantity: parseInt(item.itemQuantity)
      }
      
   });
   
   bagLog.push(...cartItems);
   
   
});



};

bagLogFunc();







/// display  !!

  bagLog.forEach((item)=>{
   bagWrapper.innerHTML += ` <div class="bagitems">
   
   <div class="quantityCtrl">
   <button class="Qbuttons Qbutton1" data-button-name="add">+</button>
   <input class="inputField" type="number" min="1" max="10" value="${item.quantity}" data-product-id = "${item.id}">
   <button class="Qbuttons Qbutton2" data-button-name="minus">-</button>
   </div>
   
   
   <div class="itemPicture" style=" --itemPicture : url(${item.image})"></div>
   
   <div class="itemDetails">
   <h1>${item.name}</h1>
   <p> ₹ <span class="priceDiv"> ${item.price.toLocaleString()}</span></p>
  
   
   </div>
   <button class="removeItemBtn" data-id="${item.id}">remove</button>
   </div>`;

});














const Qbuttons = document.querySelectorAll('.Qbuttons');

Qbuttons.forEach((item)=>{
   item.addEventListener("click",()=>{

   
      
      let buttonName = item.dataset.buttonName;
      
      
      let InputBOX = item.parentElement.querySelector('.inputField');
      let productID = InputBOX.dataset.productId;
      
      
      QuantityControllerFunction(productID, buttonName);
      
     
      updateLiveValues(InputBOX, productID);
      
      
      calculatetions();
      bagLogFunc();
      localStorage.setItem('cartLogMemory', JSON.stringify(cartLog));
      
   });

});



//live update values 
//live update values 
//live update values 
//live update values 
//live update values 
//live update values 
 function updateLiveValues(InputBOX, productID){
   let updatedItem = cartLog.find(item => item.itemId === productID);
   InputBOX.value = updatedItem.itemQuantity;
   
   
   
   // update Pricediv
   let matchedProduct = productLog.find(item=> item.id === productID);
  let priceDiv = InputBOX.parentElement.parentElement.querySelectorAll('.priceDiv');
  priceDiv.forEach((item)=>{
     
     let calculatedPrice = `${parseInt(matchedProduct.price.replace(/,/g,'')) *updatedItem.itemQuantity}`;
     item.innerHTML = calculatedPrice;

     // total money
       
   
     
   
  });
 }


// remove button fun
// remove button fun


let removeItemBtn = document.querySelectorAll('.removeItemBtn');
removeItemBtn.forEach((item)=>{
  
   item.addEventListener("click",()=>{

      let removeProductId = item.dataset.id;
     

     let indexToRemove = cartLog.findIndex(item=> item.itemId === removeProductId);
   cartLog.splice(indexToRemove, 1); 
      localStorage.setItem('cartLogMemory', JSON.stringify(cartLog));
      bagLogFunc();

      location.reload();

   });

});





// calculations 
// calculations 
// calculations 

const totalAmountClass = document.querySelectorAll('.totalAmount');
const itemsNumberClass = document.querySelector('.itemsNumber');

itemsNumberClass.innerHTML = `${cartLog.length} - Products`; // total products

  const bagItemsCount = bagWrapper.querySelectorAll('.bagitems');
  
  
  bagItemsCount.forEach((bagitem)=>{
     
     
});

function calculatetions(){
   
   let priceDiv = document.querySelectorAll('.priceDiv');
   let pricesArray = [];
   
   priceDiv.forEach((divItem)=>{
      
      
      
      pricesArray.push(parseInt(divItem.innerHTML.replace(/,/g,"")));
   });

   let calculationsVariable = pricesArray
   .reduce((accumulator, currentValue) => accumulator+ currentValue, 0);
   

   totalAmountClass.forEach((item) =>{
      
        item.innerHTML = `₹ ${calculationsVariable.toLocaleString()}`;  //totalAmount
           
      });

   // calculate bill
// calculate bill

const taxDiv = document.querySelector('.taxDiv');
let calculatedTax = calculationsVariable * 0.05; // 5% tax
taxDiv.innerHTML = `+ ${calculatedTax.toLocaleString()}`;

const shippingChargesDiv = document.querySelector('.shippingChargesDiv');
let shippingCharges = 499; // shipping charges
shippingChargesDiv.innerHTML = `+ ${shippingCharges.toLocaleString()}`;

const discountChargesDiv = document.querySelector('.discountChargesDiv');
let discounts = calculationsVariable * 0.02; // discounts
discountChargesDiv.innerHTML = `- ${discounts.toLocaleString()}`;

const totalBillDiv = document.querySelector('.totalBillDiv');
let totalCharges = calculationsVariable + calculatedTax + shippingCharges - discounts ; // total amount
totalBillDiv.innerHTML = ` ${Math.ceil(totalCharges).toLocaleString()}`;

}

calculatetions();


 
   
   
 

      
      



