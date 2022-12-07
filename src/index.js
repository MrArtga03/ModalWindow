const button = document.querySelector(".button");
const formName = document.querySelector(".lab-form-name");
const formPhone = document.querySelector(".lab-form-phone");
const nameus = document.getElementById("nameUser");
const phone = document.getElementById("phoneUser");

button.addEventListener("click", () => {
    if(button) {
        formName.innerHTML=nameus.value;
        formPhone.innerHTML=phone.value;
    }
})