// slide for home
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    
    splide.mount();
});
// slide for home

let video = document.getElementById("video");
let lightBoxVideo = document.getElementById("lightBoxVideo");
let closeVideo = document.getElementById("closeVideo");

video.addEventListener("click",function(){
    lightBoxVideo.style.display = "flex";
})
closeVideo.addEventListener("click",function(){
    lightBoxVideo.style.display = "none";
})
// slide2
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth: 250,
          gap       : 10,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );
//   slide3
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel2', {
          fixedWidth: 220,
          gap       : 50,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );


//   =================================================================

let btnactive = document.getElementById("btnactive");
let btnactive2 = document.getElementById("btnactive2");
let btnactive3 = document.getElementById("btnactive3");
// product section form Api start
// watches api style start
let row = document.getElementById("row");
let active = [];
async function getApi(){
   let data = await fetch('./blog.json');
   let api = await data.json();
   let finalApi = api.watches;
   active = finalApi;
   displayProduct() ;
  btnactive.classList.add("active2");
  btnactive2.classList.remove("active2");
  btnactive3.classList.remove("active2");
  }
getApi();
function displayProduct(){
  let list = "";
  for(let i = 0 ; i< active.length ; i++){
    list+= `
    <div class="col-xl-3 col-lg-4 col-md-4">
            <div class="cardimg">
            <div class="overlay">
                <div class="card3">
                  <img
                    src="${active[i].img_url2}"
                    alt=""
                  />
                  <button class="btn" onclick="viewCard(${i})">quick view</button>
                  <div class="cardtext text-center">
                    <p class="spor mt-2">luxury , sport</p>
                    <h3 class="mt-3">${active[i].name}</h3>
                    <p class="number2 mt-3">
                      Watch music videos and streaming content in awe-inspiring
                      high definition clarity for a mobile experience...
                    </p>
                  </div>
                  <div class="action d-flex justify-content-center mt-3">
                    <button class="btn3 btn2" onclick="wishForhome(${i})">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="btn3" onclick="addToCart1(${i})">add to cart</button>
                    <a onclick="pageView(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
              <i class="fa-solid fa-sliders"></i>
            </a>
                  </div>
                </div>
              </div>
              <img
                src="${active[i].img_url}"
                alt=""
              />
              <div class="cardtext text-center">
                <p class="spor mt-2">luxury , sport</p>
                <h3 class="mt-3">${active[i].name}</h3>
                <p class="number mt-3">$${active[i].salary}.00</p>
              </div>
            </div>
          </div>
    `
  }
  row.innerHTML= list
}
// watches api style end


// jewellery api style start
let pro = [];
async function getApi3(){
  let data3 = await fetch('./blog.json');
  let api3 = await data3.json();
  let finalApi3 = api3.jewellery;
  pro = finalApi3;
  displayProduct3() 
  btnactive2.classList.add("active2");
  btnactive.classList.remove("active2");
  btnactive3.classList.remove("active2");
 }
 
function displayProduct3(){
  let list = "";
  for(let i = 0 ; i < pro.length ; i++){
    list+= `
    <div class="col-xl-3 col-lg-4 col-md-4">
           <div class="cardimg">
           <div class="overlay">
               <div class="card3">
                 <img
                   src="${pro[i].img_url2}"
                   alt=""
                 />
                 <button class="btn" onclick="viewCard2(${i})">quick view</button>
                 <div class="cardtext text-center">
                   <p class="spor mt-2">luxury , sport</p>
                   <h3 class="mt-3">${pro[i].name}</h3>
                   <p class="number2 mt-3">
                     Watch music videos and streaming content in awe-inspiring
                     high definition clarity for a mobile experience...
                   </p>
                 </div>
                 <div class="action d-flex justify-content-center mt-3">
                   <button class="btn3 btn2" onclick="wishForhome2(${i})">
                     <i class="fa-regular fa-heart"></i>
                   </button>
                   <button class="btn3" onclick="addToCart2(${i})">add to cart</button>
                   <a onclick="pageView2(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
              <i class="fa-solid fa-sliders"></i>
            </a>
                 </div>
               </div>
             </div>
             <img
               src="${pro[i].img_url}"
               alt=""
             />
             <div class="cardtext text-center">
               <p class="spor mt-2">luxury , sport</p>
               <h3 class="mt-3">${pro[i].name}</h3>
               <p class="number mt-3">$${pro[i].salary}.00</p>
             </div>
           </div>
         </div>
    `
  }
  row.innerHTML = list
}
// jewellery api style start

// bestselling api style start
let bestsalePro = [];
async function getApi4(){
  let data4 = await fetch('./blog.json');
  let api4 = await data4.json();
  let finalApi4 = api4.bestsale;
  bestsalePro = finalApi4;
  displayProduct4() 
  btnactive3.classList.add("active2");
  btnactive2.classList.remove("active2");
  btnactive.classList.remove("active2");
 }
 function displayProduct4(){
  let list = "";
  for(let i = 0 ; i< bestsalePro.length ; i++){
    list+= `
    <div class="col-xl-3 col-lg-4 col-md-4">
            <div class="cardimg">
            <div class="overlay">
                <div class="card3">
                  <img
                    src="${bestsalePro[i].img_url2}"
                    alt=""
                  />
                  <button class="btn" onclick="viewCard3(${i})">quick view</button>
                  <div class="cardtext text-center">
                    <p class="spor mt-2">luxury , sport</p>
                    <h3 class="mt-3">${bestsalePro[i].name}</h3>
                    <p class="number2 mt-3">
                      Watch music videos and streaming content in awe-inspiring
                      high definition clarity for a mobile experience...
                    </p>
                  </div>
                  <div class="action d-flex justify-content-center mt-3">
                    <button class="btn3 btn2" onclick="wishForhome3(${i})">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="btn3" onclick="addToCart3(${i})">add to cart</button>
                    <a onclick="pageView3(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
                    <i class="fa-solid fa-sliders"></i>
                  </a>
                  </div>
                </div>
              </div>
              <img
                src="${bestsalePro[i].img_url}"
                alt=""
              />
              <div class="cardtext text-center">
                <p class="spor mt-2">luxury , sport</p>
                <h3 class="mt-3">${bestsalePro[i].name}</h3>
                <p class="number mt-3">$${bestsalePro[i].salary}.00</p>
              </div>
            </div>
          </div>
    `
  }
  row.innerHTML= list
 }
// bestselling api style end

// product section form Api end






// product section in mostviewed style start
let product2 = [];
async function getApi2(){
  let data2 = await fetch('./blog.json');
  let api2 = await data2.json();
  let finalApi2 = api2.jewellery;
  product2 = finalApi2;
  displayProduct2() 
 }
getApi2();

function displayProduct2(){
 let list = "";
 for(let i = 0 ; i< product2.length ; i++){
   list+= `
   <div class="col-xl col-lg-3 col-md-4">
           <div class="cardimg">
           <div class="overlay overlay2">
               <div class="card3">
                 <img
                   src="${product2[i].img_url2}"
                   alt=""
                 />
                 <button class="btn" onclick="viewCard4(${i})">quick view</button>
                 <div class="cardtext text-center">
                   <p class="spor mt-2">luxury , sport</p>
                   <h3 class="mt-3">${product2[i].name}</h3>
                   <p class="number2 mt-3">
                     Watch music videos and streaming content in awe-inspiring
                     high definition clarity for a mobile experience...
                   </p>
                 </div>
                 <div class="action d-flex justify-content-center mt-3">
                   <button class="btn3 btn2"  onclick="wishForhome4(${i})">
                     <i class="fa-regular fa-heart"></i>
                   </button>
                   <button class="btn3" onclick="addToCart4(${i})">add to cart</button>
                   <a onclick="pageView4(${i})" class="btn3 btn2" href="Product Page.html" target="_blank">
              <i class="fa-solid fa-sliders"></i>
            </a>
                 </div>
               </div>
             </div>
             <img
               src="${product2[i].img_url}"
               alt=""
             />
             <div class="cardtext text-center">
               <p class="spor mt-2">luxury , sport</p>
               <h3 class="mt-3">${product2[i].name}</h3>
               <p class="number mt-3">$${product2[i].salary}.00</p>
             </div>
           </div>
         </div>
   `
 }
 row2.innerHTML= list
}
// product section in mostviewed style end
let view1 = 0;
let view2 = 0;
let view3 = 0;
let view4 = 0;

let toApi = JSON.parse(localStorage.getItem("car2")) || [];
let counter2 = 0;

function wishForhome(i){
  let Api1 = active[i];
  toApi.push(Api1)
  localStorage.setItem("car2",JSON.stringify(toApi));
  count7()
}
function wishForhome2(i){
  let Api1 = pro[i];
  toApi.push(Api1)
  localStorage.setItem("car2",JSON.stringify(toApi));
  count7()
}
function wishForhome3(i){
  let Api1 = bestsalePro[i];
  toApi.push(Api1)
  localStorage.setItem("car2",JSON.stringify(toApi));
  count7()
}
function wishForhome4(i){
  let Api1 = product2[i];
  toApi.push(Api1)
  localStorage.setItem("car2",JSON.stringify(toApi));
  count7()
}
function count7(){
  counter2++; 
  toWish.innerHTML = counter2
  localStorage.setItem("wish",JSON.stringify(counter2)) 
}
toWish.innerHTML= JSON.parse(localStorage.getItem("wish"));

let toProduct = JSON.parse(localStorage.getItem("car3")) || [];

function pageView(i){
  let viewHomeApi = active[i];
  toProduct.push(viewHomeApi);
  localStorage.setItem("car3",JSON.stringify(toProduct))
}
function pageView2(i){
  let viewHomeApi = pro[i];
  toProduct.push(viewHomeApi);
  localStorage.setItem("car3",JSON.stringify(toProduct))
}
function pageView3(i){
  let viewHomeApi = bestsalePro[i];
  toProduct.push(viewHomeApi);
  localStorage.setItem("car3",JSON.stringify(toProduct))
}
function pageView4(i){
  let viewHomeApi = product2[i];
  toProduct.push(viewHomeApi);
  localStorage.setItem("car3",JSON.stringify(toProduct))
}
// add to card
let toCart2 = JSON.parse(localStorage.getItem("car")) || [];

function addToCart1(i){
  let viewHomeApi = active[i];
  let founded =  toCart2.find((items)=> items.id === viewHomeApi.id);
  if(founded){
    founded.count++
  }
  else{
    toCart2.push({...viewHomeApi,count:1})
  }
  localStorage.setItem("car",JSON.stringify(toCart2))
  count5()
}
function addToCart2(i){
  let viewHomeApi = pro[i];
  let founded =  toCart2.find((items)=> items.id === viewHomeApi.id);
  if(founded){
    founded.count++
  }
  else{
    toCart2.push({...viewHomeApi,count:1})
  }
  localStorage.setItem("car",JSON.stringify(toCart2))
  count5()
}
function addToCart3(i){
  let viewHomeApi = bestsalePro[i];
  let founded =  toCart2.find((items)=> items.id === viewHomeApi.id);
  if(founded){
    founded.count++
  }
  else{
    toCart2.push({...viewHomeApi,count:1})
  }
  localStorage.setItem("car",JSON.stringify(toCart2))
  count5()
}
function addToCart4(i){
  let viewHomeApi = product2[i];
  let founded =  toCart2.find((items)=> items.id === viewHomeApi.id);
  if(founded){
    founded.count++
  }
  else{
    toCart2.push({...viewHomeApi,count:1})
  }
  localStorage.setItem("car",JSON.stringify(toCart2))
  count5()
}

// to view cards
function viewCard(i){
  lightCard.style.display = "flex";
  view1 = active[i];
  let viewcard3 = "";
  for(let i = 0 ; i < active.length ; i++){
    viewcard3 = `
    <div class="row">
            <div class="col-xl-6">
              <div class="cardwatch">
                <img src="${view1.img_url}" alt="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="cardtext">
              <i onclick="closeCard()" id="close2" class="fa-solid fa-xmark"></i>
                <p class="number mt-5 mb-4">$${view1.salary}.00</p>
                <a href="Catalog.html">see all features</a>
                <input class="input-number" type="number" name="" id="" value="1">
                <button class="btn3" onclick="addToCart1(${i})">add to cart</button>
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
function viewCard2(i){
  lightCard.style.display = "flex";
  view2 = pro[i];
  let viewcard3 = "";
  for(let i = 0 ; i < pro.length ; i++){
    viewcard3 = `
    <div class="row">
            <div class="col-xl-6">
              <div class="cardwatch">
                <img src="${view2.img_url}" alt="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="cardtext">
              <i onclick="closeCard()" id="close2" class="fa-solid fa-xmark"></i>
                <p class="number mt-5 mb-4">$${view2.salary}.00</p>
                <a href="Catalog.html">see all features</a>
                <input class="input-number" type="number" name="" id="" value="1">
                <button class="btn3" onclick="addToCart2(${i})">add to cart</button>
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
function viewCard3(i){
  lightCard.style.display = "flex";
  view3 = bestsalePro[i];
  let viewcard3 = "";
  for(let i = 0 ; i < bestsalePro.length ; i++){
    viewcard3 = `
    <div class="row">
            <div class="col-xl-6">
              <div class="cardwatch">
                <img src="${view3.img_url}" alt="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="cardtext">
              <i onclick="closeCard()" id="close2" class="fa-solid fa-xmark"></i>
                <p class="number mt-5 mb-4">$${view3.salary}.00</p>
                <a href="Catalog.html">see all features</a>
                <input class="input-number" type="number" name="" id="" value="1">
                <button class="btn3" onclick="addToCart3(${i})">add to cart</button>
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
function viewCard4(i){
  lightCard.style.display = "flex";
  view4 = product2[i];
  let viewcard3 = "";
  for(let i = 0 ; i < product2.length ; i++){
    viewcard3 = `
    <div class="row">
            <div class="col-xl-6">
              <div class="cardwatch">
                <img src="${view4.img_url}" alt="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="cardtext">
              <i onclick="closeCard()" id="close2" class="fa-solid fa-xmark"></i>
                <p class="number mt-5 mb-4">$${view4.salary}.00</p>
                <a href="Catalog.html">see all features</a>
                <input class="input-number" type="number" name="" id="" value="1">
                <button class="btn3" onclick="addToCart4(${i})">add to cart</button>
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