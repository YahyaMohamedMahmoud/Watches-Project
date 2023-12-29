let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let click = document.getElementById("click");

click.addEventListener("click",function(){
    localStorage.setItem("firstName" ,firstName.value)
    localStorage.setItem("lastName" ,lastName.value)
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    cleanInp()
    window.location.href = "./login.html"
})
function cleanInp(){
    firstName.value = "",
    lastName.value = "",
    email.value = "",
    password.value = "";
}