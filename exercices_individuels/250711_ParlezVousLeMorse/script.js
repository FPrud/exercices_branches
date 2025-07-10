// Étape 1

const getLatinCharacterList = (text) => {
    return text.toUpperCase().split("");
};

let message = "Hello World";

// console.log(getLatinCharacterList(message));

// Étape 2

import { latinToMorse } from './latinToMorse.js';

const translateLatinCharacter = (character) => {
    return latinToMorse[character] + " ";
};

// console.log(translateLatinCharacter('A'));

// Étape 3

const encode = (text) => {
    let morseMessage = ""
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
    for (const symbol of getMorseCharacterList(morse)) {
        textMessage += translateMorseCharacter(symbol);
    }
    return textMessage;
};

console.log(decode("-.-. .- / -- .- .-. -.-. .... . / -.-. .- / -- .- .-. -.-. .... ."))
console.log(encode("coucou ca marche"))

// Étape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.