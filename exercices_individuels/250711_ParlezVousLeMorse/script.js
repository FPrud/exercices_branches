// Étape 1

const getLatinCharacterList = (text) => {
    return text.toUpperCase().split("");
};

// let message = "Hello World";

// console.log(getLatinCharacterList(message));

// Étape 2

import { latinToMorse } from './latinToMorse.js';

const translateLatinCharacter = (character) => {
    return latinToMorse[character] + " ";
};

// console.log(translateLatinCharacter('A'));

// Étape 3

const encode = (text) => {
    let morseMessage = "";
    for (const letter of getLatinCharacterList(text)) {
        morseMessage += translateLatinCharacter(letter);
    }
    return morseMessage;
};

// console.log(encode("ca marche CA MARCHE"));

// Étape 4

const getMorseCharacterList = (morse) => {
    return morse.split(" ");
};

import { morseToLatin } from './morseToLatin.js';

const translateMorseCharacter = (character) => {
    return morseToLatin[character];
};

const decode = (morse) => {
    let textMessage = "";
    for (const morseLetter of getMorseCharacterList(morse)) {
        textMessage += translateMorseCharacter(morseLetter);
    }
    return textMessage;
};

// console.log(decode("-.-. .- / -- .- .-. -.-. .... . / -.-. .- / -- .- .-. -.-. .... ."));

// Étape 5
const input = document.querySelector("#input");
const modeSelector = document.querySelector("#modeSelector");
const submitButton = document.querySelector("#submitButton");
const showResult = document.querySelector("#showResult");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (modeSelector.value === "encode") {
        showResult.innerText = encode(input.value);
        input.value = "";
    } else if (modeSelector.value === "decode") {
        showResult.innerText = decode(input.value);
        input.value = "";
    };
});

modeSelector.addEventListener("change", () => {
    if (modeSelector.value === "encode" || modeSelector.value === "decode") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    };
});