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
    let codeMessage = ""
    for (const letter of getLatinCharacterList(text)) {
        codeMessage += translateLatinCharacter(letter);
    }
    return codeMessage;
};

console.log(encode("ca marche CA MARCHE"));

// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.



// Étape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.