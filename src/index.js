//Переменные DOM элементов
const button = document.getElementById("button");
const formName = document.querySelector(".lab-form-name");
const formPhone = document.querySelector(".lab-form-phone");
const nameus = document.getElementById("nameUser");
const phone = document.getElementById("phoneUser");

button.addEventListener("click", () => {
    button.classList.add("active");
    button.style.boxShadow = "none";
    formName.innerHTML=nameus.value;
    formPhone.innerHTML=phone.value;
})