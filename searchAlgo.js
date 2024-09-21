// logo button setting

const homebtn =document.querySelector('.Homebtn');

homebtn.addEventListener("click",()=>{
  window.location.href = 'index.html';
});


const searchButton = document.querySelector('.searchBtn');
const searchText = document.querySelector('.searchBtn span');
const searchBar = document.querySelector('.searchInput');

searchButton.addEventListener("click", ()=>{
  let searchVisibleValue = searchBar.style.display;
  console.log(`vivibility of menue : ${searchVisibleValue}`);
  searchBar.style.display = searchVisibleValue === 'none' ? 'block' : 'none';

  
  searchText.style.opacity =  searchVisibleValue === 'none' ? '1' : '0.8';
  console.log(`vivibility of menue toggle : ${searchVisibleValue}`);

  

})
// logo button setting ends


const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keydown',function(event){

if(event.key ==='Enter'){
 
  event.preventDefault();

  let searchedValue = searchInput.value.trim();

  if(searchedValue){
    window.location.href = `searchResult.html?query=${encodeURIComponent(searchedValue)}`;

  } else{
         console.log('enter any search input');
  }


}

});



const resultDisplay = document.querySelector('.searchedProducts-wrapper');
const searchedTerm = document.querySelector('.searchedTerm');

function getQuery(param){

  const urlParams = new URLSearchParams(window.location.search);

  
  return urlParams.get(param);
  

}

const searchedValue = getQuery('query');
if(searchedValue){
searchedTerm.innerHTML = ` for : ${searchedValue}`;
}

if (searchedValue) {
  const filteredProducts = productLog.filter(item => {
    const itemDetails = item.name.toLowerCase() + " " + item.type.toLowerCase() + " " + item.company.toLowerCase() + " " + item.description.toLowerCase();
    return itemDetails.includes(searchedValue.toLowerCase());
  });

  let htmlGenerator2 = filteredProducts.map(item => {
    return `
     <div class="products Viewproducts" style = "--url: url(${item.image}); --BG: ${item.bgColor};" productName = "${item.name}">
      <div class="ProductInfo">
        <p>${item.name}</p>
        <span class="productPrice">${item.price}</span>
        </div>
        </div>`;
  }).join('');

  resultDisplay.innerHTML = htmlGenerator2;
  
  console.log(`searched items:`, filteredProducts);
}

 else{
           console.log('press enter');
  }







