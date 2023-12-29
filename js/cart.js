let toCart = JSON.parse(localStorage.getItem("car")) || [];
let tBody = document.getElementById("tBody");
let countTo = document.getElementById("countTo");
toWish.innerHTML= JSON.parse(localStorage.getItem("wish"));
let counter = 0;


function viewTable(){
    let list = "";
    for(let i = 0 ; i < toCart.length ; i++){
       list+=`
       <tr>
       <td><img src="${toCart[i].img_url}" alt=""></td>
       <td class="linkname"><a href="Catalog.html">${toCart[i].name}</a></td>
       <td class="linkname">
         <a onclick="checkCard(${i})" class="btn bttn1" href="Check Out.html"><i class="fa-solid fa-comment-dollar"></i></a>  
         <button onclick="deleteRow(${i})" class="btn btn5"><i class="fa-regular fa-trash-can"></i></button>  
       </td>
       <td class="linkname">$${toCart[i].salary}.00</td>
       <td class="linkname">${toCart[i].count}</td>
       <td class="linkname">$${toCart[i].salary*toCart[i].count}.00</td>
   </tr>
       ` 
    }
    tBody.innerHTML = list;

}
viewTable();

function deleteRow(i){
    toCart[i].count = toCart[i].count - 1;
    toCart[i].salary*toCart[i].count == toCart[i].salary-toCart[i].count;
    if(toCart[i].count < 1){
      toCart.splice(i,1);  
    }
    window.location.reload();    
    localStorage.setItem("car",JSON.stringify(toCart));
    count6()
}
function count6(){
  counter= JSON.parse(localStorage.getItem("v"));
  counter--
  countTo.innerHTML = counter;
  localStorage.setItem("v",JSON.stringify(counter)) 
}
countTo.innerHTML= JSON.parse(localStorage.getItem("v"));

let toCheck = JSON.parse(localStorage.getItem("car"))
function checkCard(i){
  let checkNow1 = shopArr[i];
  toCheck.push(checkNow1);
  localStorage.setItem("car",JSON.stringify(toCheck))
}










