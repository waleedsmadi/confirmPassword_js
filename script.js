// select elements

"use strict";

const inputEl = document.querySelector("[data-password]"),
      inputConfirmEl = document.querySelector("[data-confirm]"),
      showBtn = document.querySelector("[data-show]"),
      checkBtn = document.querySelector("[data-btn]"),
      response = document.querySelector("[data-response]");



// password input
inputEl.addEventListener("input", (e) =>{
    const value = e.target.value;

    // simple valid password
    if(value.length >= 6){
        inputConfirmEl.disabled = false;
        checkBtn.classList.add("active");
    }else{
        inputConfirmEl.disabled = true;
        checkBtn.classList.remove("active");
    }


    // if user remove first password
    // remove the confirm field
    if(value.length == 0){
        inputConfirmEl.value = '';
        showBtn.innerText = '';
    }
});



// confirm password
inputConfirmEl.addEventListener("input", (e) =>{
    const value = e.target.value;


    // Default setting
    if(value.length == 0){
        e.target.type = 'password'
    }

    // to show or hide password word
    if(value.length >= 1 && e.target.type == 'password'){
        showBtn.innerText = "SHOW";
    }else if(value.length >= 1 && e.target.type == 'text'){
        showBtn.innerHTML = "HIDE";
    }else{
        showBtn.innerHTML = '';
    }
});



// toggle show btn in confirm password field
showBtn.addEventListener("click", (e) => {

    if(e.target.innerText === 'SHOW'){
        inputConfirmEl.type = 'text';
        e.target.innerText = 'HIDE';

    }else if(e.target.innerText === 'HIDE'){
        e.target.innerText = 'SHOW';
        inputConfirmEl.type = 'password';
    }
});



// to check the result
checkBtn.addEventListener("click", (e) => {
    // if not active >>> return
    if(!e.target.classList.contains("active")) return


    const firstPassword = inputEl.value;
    const lastPassword = inputConfirmEl.value;

    // check if passwords are identical
    if(firstPassword === lastPassword){
        response.classList.remove("hidden");
        response.classList.remove("error");
        response.classList.add("success");
        response.innerText = "Nice! the password is match";
    }else{
        response.classList.remove("hidden");
        response.classList.remove("success");
        response.classList.add("error");
        response.innerText = "Wrong! the password not match";
    }
});