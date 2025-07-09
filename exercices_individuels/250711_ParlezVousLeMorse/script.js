// Étape 1

let phraseTest = "";

function getLatinCharacterList(letterChain) {
    for(const letter of letterChain){
        phraseTest += letter;
    };  
};

let chaine1 = ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"];

getLatinCharacterList(chaine1);

console.log(phraseTest);

// Étape 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

// Attention: la table de correspondance ne contient que des caractères majuscules.

// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

// Étape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.