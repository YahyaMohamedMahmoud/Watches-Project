toWish.innerHTML= JSON.parse(localStorage.getItem("wish"));
async function shopApi() {
    let view = await fetch("./blog.json");
    let shopCateg = await view.json();
    let final = shopCateg.shopView;
    shopArr = final;
  }
  shopApi();
  let toCart = JSON.parse(localStorage.getItem("car")) || [];
  let countTo = document.getElementById("countTo");
let x = 0;
function addToCart(i){
  let cart = shopArr[i];
  let founded =  toCart.find((items)=> items.id === cart.id);
  if(founded){
    founded.count++
  }
  else{
    toCart.push({...cart,count:1})
  }
  localStorage.setItem("car",JSON.stringify(toCart));
  count5()
}

function count5(){
  x++; 
  countTo.innerHTML = x
  localStorage.setItem("v",JSON.stringify(x)) 
}
countTo.innerHTML= JSON.parse(localStorage.getItem("v"));
