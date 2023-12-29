let toWishTab = JSON.parse(localStorage.getItem("car2")) || [];
let tBody2 = document.getElementById("tBody2");
let toWish = document.getElementById("toWish");
countTo.innerHTML= JSON.parse(localStorage.getItem("v"));
let counter2 = 0;
let shopArr = [];


function viewWish(){
    let list = "";
    for(let i = 0 ; i < toWishTab.length ; i++){
       list+=`
       <tr>
       <td class="first"><button class="remove" onclick="deleteRow2(${i})"><i class="fa-solid fa-xmark"></i></button></td>
       <td class="img"><a href=""><img src="${toWishTab[i].img_url}" alt=""></td>
       <td class="linkname">
       <a href="">${toWishTab[i].name}</a>
       </td>
       <td class="linkname">$${toWishTab[i].salary}.00</td>
       <td class="linkname"><a class="remove add" href="Catalog.html">return to catalog</a>
       </td>
   </tr>
       ` 
    }
    tBody2.innerHTML = list;
}
viewWish();


function deleteRow2(i){
    toWishTab.splice(i,1);  
    window.location.reload();    
    localStorage.setItem("car2",JSON.stringify(toWishTab));
    count7()
}

function count7(){
  counter2= JSON.parse(localStorage.getItem("wish"));
  counter2--
  toWish.innerHTML = counter2;
  localStorage.setItem("wish",JSON.stringify(counter2)) 
}
toWish.innerHTML= JSON.parse(localStorage.getItem("wish"));

