const productDiv = document.querySelectorAll('.Viewproducts');
 
productDiv.forEach((item) =>{
  item.addEventListener("click",()=>{
    productName = item.getAttribute("productName");
    console.log(`pname : ${productName}`);
    
  
  if(productName){
    window.location.href =`productViewer.html?query=${encodeURIComponent(productName)}`;
  
} else{
       console.log('FAIL1');
}

  });
});

const productViewerDiv = document.querySelector('.pvContent');

function getNameQuery(nameParameter){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nameParameter);
}

let productName = getNameQuery('query');
console.log(` the name of the product is : ${productName}`);

productLog.forEach((item)=>{
  if(productName===item.name){
    productViewerDiv.innerHTML = ` <div class="pvImages" style="--pvUrl : url(${item.image})"> 
               
                
                <div class="imageSlider">
                    <img src="${item.image}" alt="">
                    <img src="${item.image2}" alt="">
                    <img src="${item.image3}" alt="">
                </div>

    </div>
    <div class="pvDetails">

    <div class="pvDetails-1">
    <h1>${item.name}</h1>
    <code>${item.price}</code>
    <h3>${item.company}</h3>
    </div>
    
    
    <div class="pvDetails-2">
    <div class="pRating" style="--pvRating: url(IMGS/rating.png); --marginX: -30px;"></div>
    <details class="detailsClass" open>
    <summary>Description...</summary>
    <p>${item.description}</p>
    </details>
    </div>
    
    </div>
    `;
  }
})
