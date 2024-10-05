export let cartLog = JSON.parse(localStorage.getItem('cartLogMemory')) || [];


const cartButton = document.querySelectorAll('.cartButton');

cartButton.forEach((item)=>{
    item.addEventListener("click",()=>{
        

        bagTriggerFunc('visible');
        

        let productId = item.dataset.productId;
        addToCart(productId);
        localStorage.setItem('cartLogMemory', JSON.stringify(cartLog));
        
      
    });
});


function addToCart(productId){ 
    let matchedItem = cartLog.find(item=> item.itemId === productId);
    

    
    if(matchedItem){
        matchedItem.itemQuantity = Number(matchedItem.itemQuantity) + 1;
    } else{
        cartLog.push({
            itemId : productId,
            itemQuantity : 1
        });

      
        
    }
    

    localStorage.setItem('cartLogMemory', JSON.stringify(cartLog));
    // return cartLog;
    
    
        
    }; // funtion ends 
    

    
    export function QuantityControllerFunction(productID, operation){
        let matchedItem = findItemInCart(productID);
  
       if(productID){
        if(operation === 'add'&& matchedItem.itemQuantity < 10){
                matchedItem.itemQuantity = Number(matchedItem.itemQuantity)+1;
        } // if closes
        else if(operation === 'minus' && matchedItem.itemQuantity > 1){
                matchedItem.itemQuantity = Number(matchedItem.itemQuantity)-1;
        } // else if closes
       } // main if closes here
       else{
           console.log(`productID is not perest in quantitycontrol function`);
        }
            // main else closes here
          



            localStorage.setItem('cartLogMemory', JSON.stringify(cartLog));

    }; // function ends



    // find intem in caart function starts from here 11111

       function findItemInCart(productID){

        return cartLog.find(item=> item.itemId === productID);
       

       }


      export function bagTriggerFunc(value){
           
           const bagCounter = document.querySelectorAll('.bagCounter');
           
           bagCounter.forEach((item)=>{
               
               item.setAttribute('counterVisible',value);

               let visibleValue = item.getAttribute('counterVisible');

               if(visibleValue === 'visible'){
                let bagLink = document.querySelectorAll('.bagLink');
                bagLink.forEach((item)=>{
        
                    item.setAttribute('href',"BagPage.html");
        
                });
               }
               
            });
            
            
        }
 
    