import {cartLog} from "./cart-Items.js";
import {bagTriggerFunc} from "./cart-Items.js";

const homebtn =document.querySelector('.Homebtn');
const backButton= document.querySelector('#backButton');

const navWrapper = document.querySelector('.navWrapper');

navWrapper.innerHTML =`
         
              <div  class="navLinks--items js-menubtn">
                <img src="IMGS/menu-alt-1-svgrepo-com.svg" alt="">
                
                <div visiblility="false" class= "navLinks--items--Menu">
                    <ul>
                        <li class="manuItems bagItem">
                            <!-- // menu items  -->
                             <a class="bagLink" href="">
                           <img src="IMGS/bag-smile-svgrepo-com.svg" alt="">
                            <div class="bagCounter bagCounter1" counterVisible ="none">!</div>
                            <span>View Bag</span></a>
                        </li>




                        <li class="manuItems"><a href="shopPage.html">
                            <span>Shop</span></a></li>

                        <li class="manuItems"><a href="index.html#sec1">
                            <span>New Arrivals</span></a></li>

                        <li class="manuItems"><a href="musicPage.html">
                            <span>Music</span>
                        </a></li>


                        <li class="manuItems"><a href="watchesPage.html">
                            <span>Watches</span>
                        </a></li>

                        <li class="manuItems"><a href="#">
                            <span>Featured Items</span>
                        </a></li>

                        <li class="manuItems infoItems"><a href="aboutUsPage.html">
                            <span>About us</span>
                        </a></li>
                    
                        
                        
                    </ul>
                </div>
              </div>
        
`;


const menuBtn = document.querySelector('.js-menubtn');
let menuElement = document.querySelector('.navLinks--items--Menu');
let menuVisibility = menuElement.getAttribute('visiblility');
let menuLogo = document.querySelector('.js-menubtn img');

 
  menuBtn.addEventListener('click', ()=>{
     
     if(menuVisibility==='false'){
         



         if (menuLogo) {
           menuLogo.setAttribute("src", "IMGS/cross-svgrepo-com.svg");
         }



         menuVisibility = "true";
         menuElement.setAttribute('visibility', menuVisibility); 
        }else if(menuVisibility==='true'){
            


            if (menuLogo) {
                menuLogo.setAttribute("src","IMGS/menu-alt-1-svgrepo-com.svg");
              }
           



         menuVisibility= "false";
         menuElement.setAttribute('visibility', menuVisibility); 
     }

 
 })
 
 //  home and back buttons
 //  home and back buttons
 //  home and back buttons
if(homebtn){

    homebtn.addEventListener("click",()=>{
       window.location.href = 'index.html';
     });
}
  if(backButton){

      backButton.addEventListener("click",()=>{
          window.history.back();
          console.log("backbtn");
        });
    }




//  updating bag count
//  updating bag count
//  updating bag count


 const bagCounter = document.querySelectorAll('.bagCounter');
bagCounter.forEach((item)=>{
   
    if(item){
        item.innerHTML= "!" ;
    }

    
});  

cartLog.forEach((item)=>{
    if(item){
        bagTriggerFunc('visible');
        
    }
});