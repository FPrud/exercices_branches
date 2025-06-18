const form = document.querySelector("#form");
const confirmButton = document.querySelector("#confirmButton");
const sayHello = document.querySelector("#sayHello");


confirmButton.addEventListener("click", () => {
    if(form.value===""){
        document.querySelector("#sayHello").innerText = `Veuillez renseigner votre nom.`
    } else {
        document.querySelector("#sayHello").innerText = `Bonjour ${form.value} !`
    }
});