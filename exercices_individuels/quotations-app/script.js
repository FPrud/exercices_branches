// Éléments DOM
const formQuote = document.querySelector("#formQuote");
const formAuthor = document.querySelector("#formAuthor");
const submit = document.querySelector("#submit");
const quoteList = document.querySelector("#quoteList");
const counter = document.querySelector("#counter");

let quoteCount = 0;
let quotes = [];

// Met à jour le compteur
function updateCounter() {
    counter.textContent = `${quoteCount} citations`;
};

// Structure du DOM
function addQuote(quote, author) {

    const divQuote = document.createElement('div');
    divQuote.classList.add('quote');
    quoteList.appendChild(divQuote);

    const pText = document.createElement('p');
    pText.classList.add('text');
    pText.textContent = quote;
    divQuote.appendChild(pText);

    const pAuthor = document.createElement('p');
    pAuthor.classList.add('author');
    pAuthor.textContent = author;
    divQuote.appendChild(pAuthor);

    divQuote.appendChild(document.createElement('hr'));

    quoteCount += 1;
    updateCounter();
};

// Validation du formulaire
submit.addEventListener("click", (event) => {
    event.preventDefault();
    addQuote(formQuote.value, formAuthor.value);
    quotes.push({ text: formQuote.value, author: formAuthor.value });
});

updateCounter();