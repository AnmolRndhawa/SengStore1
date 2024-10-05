
  const productWrapper = document.querySelectorAll('.productsWrapper');
 

 
  let searchedProducts = [];
  
  
  productWrapper.forEach((item)=>{
    sortByAttribute(item);
    

  })
  
  // sorting data by content attribute
  // sorting data by content attribute
  
  function sortByAttribute(itemParam){

  const sortByInput = itemParam.getAttribute("content");
  const contentSize = itemParam.getAttribute("contentSize");
  //   const sortByInput2 = productWrapper.getAttribute("content2");

  let clothesProducts = [];

  productLog.forEach((item)=>{

    const itemDetails = item.name.toLowerCase() + " " + item.type.toLowerCase() + " " + item.company.toLowerCase() + " " + item.description.toLowerCase();

    if (itemDetails.includes( sortByInput.toLowerCase())) {

  

      if(contentSize=== 'short'){
        clothesProducts.push(item);

        clothesProducts = clothesProducts.slice(-4);
      } else{

        clothesProducts.push(item);
      }
      

    } else if (sortByInput === "collection") {
      
      clothesProducts.push(item);
    }
    else if (sortByInput === "latest") {
      let slicedArray = productLog.slice(-4);
     
      clothesProducts = slicedArray;

    }
    
  });



  if(itemParam.className === 'carousel'){
     // for carousel 
    displayCarouselFunction(itemParam, clothesProducts);

  } else if(itemParam.className === 'productsWrapper'){
    displayProductsFn(itemParam, clothesProducts);
  } else{
    console.log(`Not Found !! itemParameter in sort by attribute fun ${itemParam.className} <== this in parameter`);

  }

  };



 function displayProductsFn(itemParam, products){

 // display collection products 
  // display collection products 
  let htmlGenerator = '';

  products.forEach((item) => {
    htmlGenerator += `<div class="products Viewproducts" style = "--url: url(${item.image}); --BG: ${item.bgColor};" productName = "${item.name}">
      <div class="ProductInfo">
        <p>${item.name}</p>
        <span class="productPrice">${item.price}</span>
        </div>
        </div>`;

      });
      itemParam.innerHTML = htmlGenerator;
}


 


  // carousel 
  // carousel 
  // carousel 
  // carousel 
  // carousel 
  // carousel 
 

  const carousel = document.querySelectorAll('.carousel');
  
  
  carousel.forEach(item =>{
    
    sortByAttribute(item);
    carouselMover(item);
    
  });
  
  
  
  
  // // displaying carousel items 
  // // displaying carousel items 
  
  function displayCarouselFunction(itemParam, productsParam){
  let carouselHTML = '';
  productsParam.forEach((product)=> {
  carouselHTML += `   
          <div class="card Viewproducts" productName = "${product.name}">
              <!-- ---- card image ----  -->
              <div class="cardImg">
                  <img src="${product.image}" alt="">
              </div>
              <!-- ---- card info ----  -->
               <h2>${product.name}
                  <p class="priceTag">${product.price}</p>
               </h2>
               
               <details>
                      <summary class="js-detailsBtn1">Add To Cart</summary>
                       <div class="details--div">
                          <p> Tap on "continue" to personalize </p>
                          <button>Continue</button>

                       </div>
          </details>
      

          </div>
          `;})
        
          itemParam.innerHTML = carouselHTML;


 
} // display carousel funtion ends


// carosule moving buttons
// carosule moving buttons
// carosule moving buttons


  function carouselMover(itemParam){
const firstSlide = itemParam.querySelector('.card');
const firstSlideWidth = firstSlide.clientWidth;


// Select the arrows
const parentDiv = itemParam.parentElement;

const slideArrows = parentDiv.querySelectorAll('i');

// Add event listeners to the arrows
slideArrows.forEach(icon => {
  icon.addEventListener("click", () => {
    // Scroll left or right based on the arrow clicked
    itemParam.scrollLeft += icon.id === "left" ? - firstSlideWidth : firstSlideWidth;
  

  // carasule buttuons hide effect 
  // carasule buttuons hide effect 
  // carasule buttuons hide effect 
 



  });
});


  } // function ends here

