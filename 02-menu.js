const navWrapper = document.querySelector('.navWrapper');

navWrapper.innerHTML =`
         
              <div  class="navLinks--items js-menubtn">
                <img src="IMGS/menu-alt-1-svgrepo-com.svg" alt="">
                <div visiblility="false" class= "navLinks--items--Menu">
                    <ul>
                        <li class="manuItems">
                            <!-- // menu items  -->
                             <a href="#">
                           
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
         console.log('seeting ture');



         if (menuLogo) {
           menuLogo.setAttribute("src", "IMGS/cross-svgrepo-com.svg");
         }



         menuVisibility = "true";
         menuElement.setAttribute('visibility', menuVisibility); 
        }else if(menuVisibility==='true'){
            console.log('seeting false');


            if (menuLogo) {
                menuLogo.setAttribute("src","IMGS/menu-alt-1-svgrepo-com.svg");
              }
           



         menuVisibility= "false";
         menuElement.setAttribute('visibility', menuVisibility); 
     }

 
 })
 