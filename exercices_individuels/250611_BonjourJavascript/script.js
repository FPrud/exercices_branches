//Étape 1 : organisation de dossiers

/*//Étape 2 : premier code
let message = "Bonjour !";
console.log(message);
let firstname = "Ada";
message = `Bonjour ${firstname} !`;
console.log(message);
*/

/*//Étape 3 : dans une fonction
let firstname = "Ada"
const sayHello = (firstname) => {
    let message = `Bonjour ${firstname} !`;
    console.log(message);
};

sayHello(firstname);
*/

/*//Étape 4 : un second paramètre
const sayHello = (firstname, hour) => {
    if (hour < 18) {
        console.log(`Bonjour ${firstname} !`);
    } else {
        console.log(`Bonsoir ${firstname} !`);
    }
};

sayHello(`Ada`, 11);
sayHello(`Ada`, 18);
sayHello(`Ada`, 17);
*/

//(bonus) Étape 5 : HTML, liaison avec JavaScript
// voir index.html

//(bonus) Étape 6 : Première manipulation du DOM 😱
let firstname = prompt()
const sayHello = (firstname) => {
    let message = `Bonjour ${firstname} !`;
    document.querySelector('h1').innerText = message;
};

sayHello(firstname);