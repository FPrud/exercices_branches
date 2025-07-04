// Éléments DOM
const formQuote = document.querySelector("#formQuote");
const formAuthor = document.querySelector("#formAuthor");
const submit = document.querySelector("#submit");
const quoteList = document.querySelector("#quoteList");
const counter = document.querySelector("#counter");


submit.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(formQuote.value);
    console.log(formAuthor.value);

});