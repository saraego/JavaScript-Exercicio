let email = document.getElementById("email")
let password = document.getElementById("password")
let textForm = document.getElementById('textForm')
let textEmail = document.getElementById('textEmail')
let textPassword = document.getElementById('textPassword')
let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    if (email.value == "" && password.value == "") {
        textForm.textContent = "você precisa preencher todos os campos"
    } else if (validatorEmail(email.value) === true && validatorPassword(password.value) === true) {
        console.log(email.value);
        console.log(password.value);
        textEmail.textContent = "";
        textPassword.textContent = "";
        textForm.textContent = "";
    }
    else {
        console.log("requisição não atendida");
    }
    e.preventDefault()
})

email.addEventListener("keyup", () => {
    if (validatorEmail(email.value) !== true) {
        textEmail.textContent = "*Formato de email inccoreto"
    } else {
        textEmail.textContent = ""
    }
})

password.addEventListener("keyup", () => {
    if (validatorPassword(password.value) !== true) {
        textPassword.textContent = "*formatdo de senha S,!@#,123 e min 6 digitos"
    } else {
        textPassword.textContent = ""
    }
})


function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validatorPassword(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}