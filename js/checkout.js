let toCart = JSON.parse(localStorage.getItem("car")) || [];
let checkView = document.getElementById("checkView");


function displayCheck(){
    let check = "";
    for(let i = 0 ; i < toCart.length ; i++){
      check+=`
      <div class="col-xl-7 col-lg-7">
                    <div class="checktext mb-3 d-flex justify-content-between">
                        <h3>Contact</h3>
                        <p>have you an account ? <a href="login.html"> log in</a></p>
                    </div>
                    <input class="form-control2" type="email" name="" id="" placeholder="Email or mobile phone number">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Email me with news and offers
                        </label>
                      </div>
                    <div class="check2">
                        <h3>Delivery</h3>
                        <select class="form-select2" aria-label="Default select example">
                            <option selected>Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="row">
                            <div class="col">
                              <input type="text" class="form-control1" placeholder="First name" aria-label="First name">
                            </div>
                            <div class="col">
                              <input type="text" class="form-control1" placeholder="Last name" aria-label="Last name">
                            </div>
                          </div>
                    <input class="form-control2" type="text" name="" id="" placeholder="Address">
                    <input class="form-control2" type="text" name="" id="" placeholder="Apartment,suite">
                    <select class="form-select2" aria-label="Default select example">
                        <option selected>Save this information for next time</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    <input class="form-control2" type="text" name="" id="" placeholder="Email or mobile phone number">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Email me with news and offers
                        </label>
                      </div>


                    </div>
                    <div class="check3">
                        <h3 class="mb-3">Payment</h3>
                        <p>All transactions are secure and encrypted.</p>
                        <button class="btn">pay now</button>
                    </div>


                </div>
      <div class="col-xl-5 col-lg-5">
      <div class="cardcheck">
          <img src="${toCart[i].img_url}" alt="">
          <div class="cardtext1">
              <h4 class="mt-3 mb-3">${toCart[i].name}</h4>
              <div class="row justify-content-between">
                  <div class="col-xl-1 col-lg-2">
                      <p class="mb-3">Subtotal:</p>
                  </div>
                  <div class="col-xl-1 col-lg-2">
                      <p>$${toCart[i].salary}.00</p>
                  </div>
              </div>  
              <div class="row justify-content-between">
                  <div class="col-xl-1 col-lg-2">
                      <p class="mb-3">Shipping:</p>
                  </div>
                  <div class="col-xl-1 col-lg-2">
                      <p>$20.00</p>
                  </div>

              </div>  
              <div class="row justify-content-between">
                  <div class="col-xl-7 col-lg-7">
                      <p>total:</p>
                      <p class="inc mt-2">Including $12.81 in taxes</p>
                  </div>
                  <div class="col-xl-1 col-lg-2">
                      <p>$${toCart[i].salary-20}.00</p>
                  </div>
              </div>                          
          </div>
      </div>
  </div>
      `  
    }
    checkView.innerHTML = check;
}
displayCheck()