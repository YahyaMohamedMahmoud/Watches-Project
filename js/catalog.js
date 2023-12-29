// shop style start
let shopCard = document.getElementById("shopCard");
let filter1 = document.getElementById("filter1");
let filter2 = document.getElementById("filter2");
let filter3 = document.getElementById("filter3");
let search = document.getElementById("search");
let lightCard = document.getElementById("lightCard");
let lightView = document.getElementById("lightView");
let close2 = document.getElementById("close2");
let view = 0;

async function shopApi() {
  let view = await fetch("./blog.json");
  let shopCateg = await view.json();
  let final = shopCateg.shopView;
  shopArr = final;
  displayShop();
}
shopApi();
function displayShop(){
  let display = "";
  for (let i = 0; i < shopArr.length; i++) {
    display += `
    <div class="col-xl-4 col-lg-6 col-md-6">
    <div class="cardimg">
    <div class="overlay">
        <div class="card3">
          <img
            src="${shopArr[i].img_url2}"
            alt=""
          />
          <button class="btn" onclick="viewCard(${i})">quick view</button>
          <div class="cardtext text-center">
            <p class="spor mt-2">luxury , sport</p>
            <h3 class="mt-3">${shopArr[i].name}</h3>
            <p class="number2 mt-3">
              Watch music videos and streaming content in awe-inspiring
              high definition clarity for a mobile experience...
            </p>
          </div>
          <div class="action d-flex justify-content-center mt-3">
            <button class="btn3 btn2" onclick="wish(${i})">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="btn3" onclick="addToCart(${i})">add to cart</button>
            <a onclick="pageView(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
              <i class="fa-solid fa-sliders"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="cardimg2">
        <img
        src="${shopArr[i].img_url}"
        alt=""
      />
      <div class="cardtext text-center">
        <p class="spor mt-2">luxury , sport</p>
        <h3 class="mt-3">${shopArr[i].name}</h3>
        <p class="number mt-3">$${shopArr[i].salary}.00</p>
      </div> 
      </div>
     
    </div>
  </div>
       `;
  }
  shopCard.innerHTML = display;
}
filter1.addEventListener("click", function () {
  displayShop();
});
filter2.addEventListener("click", function () {
  let display = "";
  for (let i = 0; i < shopArr.length; i++) {
    display += `
       <div class="col-xl-3 col-lg-4 col-md-6">
       <div class="cardimg">
       <div class="overlay overlay3">
           <div class="card3">
             <img
               src="${shopArr[i].img_url2}"
               alt=""
             />
             <button class="btn" onclick="viewCard(${i})">quick view</button>
             <div class="cardtext text-center">
               <p class="spor mt-2">luxury , sport</p>
               <h3 class="mt-3">${shopArr[i].name}</h3>
               <p class="number2 mt-3">
                 Watch music videos and streaming content in awe-inspiring
                 high definition clarity for a mobile experience...
               </p>
             </div>
             <div class="action d-flex justify-content-center mt-3">
               <button class="btn3 btn2" onclick="wish(${i})">
                 <i class="fa-regular fa-heart"></i>
               </button>
               <button class="btn3" onclick="addToCart(${i})">add to cart</button>
               <a onclick="pageView(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
                 <i class="fa-solid fa-sliders"></i>
               </a>
             </div>
           </div>
         </div>
         <img
           src="${shopArr[i].img_url}"
           alt=""
         />
         <div class="cardtext text-center">
           <p class="spor mt-2">luxury , sport</p>
           <h3 class="mt-3">${shopArr[i].name}</h3>
           <p class="number mt-3">$${shopArr[i].salary}.00</p>
         </div>
       </div>
     </div>
       `;
  }
  shopCard.innerHTML = display;
});
filter3.addEventListener("click", function () {
  let display = "";
  for (let i = 0; i < shopArr.length; i++) {
    display += `
       <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="cardimg">
           <div class="overlay overlay4">
            <div class="card3">
                  <img
                 src="${shopArr[i].img_url2}"
                   alt=""/>
         <button class="btn" onclick="viewCard(${i})">quick view</button>
                                          
              </div>
                </div>
               <img src="${shopArr[i].img_url}" alt="">
               </div>

                  </div> 
                 <div class="col-xl-6 col-lg-6 col-md-6">
                     <div class="cardtext">
                         <p class="spor mt-4">luxury , sport</p>
                         <h3 class="mt-3">${shopArr[i].name}</h3>
                      <p class="number2 mt-3">
                 Watch music videos and streaming content in awe-inspiring
                    high definition clarity for a mobile experience...
                   </p>
                      <p class="number mt-3">$${shopArr[i].salary}.00</p>
                 <div class="action d-flex mt-3">
                  <button class="btn3 btn2" onclick="wish(${i})">
                    <i class="fa-regular fa-heart"></i>
           </button>
           <button class="btn3" onclick="addToCart(${i})">add to cart</button>
           <a onclick="pageView(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
             <i class="fa-solid fa-sliders"></i>
           </a>
              </div>
           </div>
    </div>
       `;
  }
  shopCard.innerHTML = display;
});
search.addEventListener("keyup", function () {
  let searchInp = "";
  for (let i = 0; i < shopArr.length; i++) {
    if (shopArr[i].name.toLowerCase().includes(this.value.trim()) == true) {
      searchInp += `
        <div class="col-xl-4 col-lg-3 col-md-6">
        <div class="cardimg">
        <div class="overlay">
            <div class="card3">
              <img
                src="${shopArr[i].img_url2}"
                alt=""
              />
              <button class="btn" onclick="viewCard(${i})">quick view</button>
              <div class="cardtext text-center">
                <p class="spor mt-2">luxury , sport</p>
                <h3 class="mt-3">${shopArr[i].name}</h3>
                <p class="number2 mt-3">
                  Watch music videos and streaming content in awe-inspiring
                  high definition clarity for a mobile experience...
                </p>
              </div>
              <div class="action d-flex justify-content-center mt-3">
                <button class="btn3 btn2" onclick="wish(${i})">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <button class="btn3" onclick="addToCart(${i})">add to cart</button>
            <a onclick="pageView(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
              <i class="fa-solid fa-sliders"></i>
            </a>
              </div>
            </div>
          </div>
          <img
            src="${shopArr[i].img_url}"
            alt=""
          />
          <div class="cardtext text-center">
            <p class="spor mt-2">luxury , sport</p>
            <h3 class="mt-3">${shopArr[i].name}</h3>
            <p class="number mt-3">$${shopArr[i].salary}.00</p>
          </div>
        </div>
      </div>
        `;
    }
  }
  shopCard.innerHTML = searchInp;
});
function viewCard(i){
  lightCard.style.display = "flex";
  view = shopArr[i];
  let viewcard3 = "";
  for(let i = 0 ; i < shopArr.length ; i++){
    viewcard3 = `
    <div class="row">
            <div class="col-xl-6 col-lg-5 col-md-6">
              <div class="cardwatch">
                <img src="${view.img_url}" alt="">
              </div>
            </div>
            <div class="col-xl-6 col-lg-5 col-md-6">
              <div class="cardtext">
              <i onclick="closeCard()" id="close2" class="fa-solid fa-xmark"></i>
                <p class="number mt-5 mb-4">$${view.salary}.00</p>
                <a href="Catalog.html">see all features</a>
                <input class="input-number" type="number" name="" id="" value="1">
                <button class="btn3" onclick="addToCart(${i})">add to cart</button>
                <p class="watchpara mt-5">
                  Watch music videos and streaming content in awe-inspiring
                     high definition clarity for a mobile experience...
                </p>
                <div class="share mt-4">
                  <h4 class="mb-3">share this product</h4>
                  <a class="facebook" href="https://www.facebook.com/?locale=ar_AR"><i class="fa-brands fa-facebook-f"></i></a>
                  <a class="twitter" href="https://twitter.com/?lang=ar"><i class="fa-brands fa-twitter"></i></a>
                  <a class="pinterest" href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest"></i></a>
                  <a class="google" href="https://support.google.com/answer/2451065?hl=en"><i class="fa-brands fa-google-plus-g"></i></a>
                  <a class="linkedin" href="https://www.instagram.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
              </div>
            </div>
    `
     
  }
 lightView.innerHTML = viewcard3;
}
function closeCard(){
  lightCard.style.display = "none";
}
// shop style end


// addTocart style start
let toWishTab = JSON.parse(localStorage.getItem("car2")) || [];
let counter2 = 0;
let toWish = document.getElementById("toWish");

function wish(i){
  let cart2 = shopArr[i];
  toWishTab.push(cart2)
  localStorage.setItem("car2",JSON.stringify(toWishTab));
  count7()
}
function count7(){
  counter2++; 
  toWish.innerHTML = counter2
  localStorage.setItem("wish",JSON.stringify(counter2)) 
}
toWish.innerHTML= JSON.parse(localStorage.getItem("wish"));

let toview = JSON.parse(localStorage.getItem("car3")) || [];

function pageView(i){
  let aa = shopArr[i];
  toview.push(aa);
  localStorage.setItem("car3",JSON.stringify(toview))
}















// addTocart style start


