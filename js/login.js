let email2 = document.getElementById("email2");
let password2 = document.getElementById("password2");
let sign = document.getElementById("sign");

sign.addEventListener("click",function(){
    let name1 = localStorage.getItem("email");
    let password1 = localStorage.getItem("password")
if(email2.value == ""||
   password2.value =="" 
){
    alert("Please Enter Your Data")
}else{
 if(email2.value == name1 && password2.value == password1){
    window.location.href = "./thank.html"
}else{
    alert("Please Enter Your Email and Password true..")
}
}}
)





