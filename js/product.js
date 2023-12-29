let toview = JSON.parse(localStorage.getItem("car3")) || [];
let page = document.getElementById("page");


function display(){
    let list = "";
    for(let i = 0 ; i < toview.length; i++){
        list= `
            <div class="col-xl-5 col-lg-5 col-md-6">
                <div class="viewimg">
                    <img id="phot" src="${toview[i].img_url}" alt="">
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-6">
            <h3 class="mt-2 mb-3">${toview[i].name}</h3>
            <span class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span class="one ms-1">
                2 review
              </span> <br><br>
              <span class="one one2">brand : <a class="in" href="Catalog.html">rada</a></span><br>
              <span class="one one2">availability : <span class="in in2">in stock</span></span>
            <p class="number mt-4">$${toview[i].salary}.00</p>
              <div class="color mt-5">
                <button class="btn black mb-3"></button>
                <button class="btn blue mb-3"></button>
                <p class="men">men</p>
                <span class="one qty">qty : </span>
                <span class="coun">1</span>
                <button class="remove">add to card</button>
              </div>
            </div>
        `
    }
    page.innerHTML = list;
}
display()

let video = document.getElementById("video");
let lightBoxVideo = document.getElementById("lightBoxVideo");
let closeVideo = document.getElementById("closeVideo");

video.addEventListener("click",function(){
    lightBoxVideo.style.display = "flex";
})
closeVideo.addEventListener("click",function(){
    lightBoxVideo.style.display = "none";
})