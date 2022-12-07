const button = document.querySelector(".button");
const formName = document.querySelector(".lab-form-name");
const formPhone = document.querySelector(".lab-form-phone");
const nameus = document.getElementById("nameUser");
const phone = document.getElementById("phoneUser");

const stepSimbols = /[A-Z]/;
const lowerSimbols = /[a-z]/;
const nums = /[0-9]/;
console.log(stepSimbols)
button.addEventListener("click", () => {
    if(button) {
        formName.innerHTML=nameus.value;
        if(nums.test(phone)) {
            formPhone.innerHTML=phone.value;
        } else {
            console.log("pizda")
        }
    }
})