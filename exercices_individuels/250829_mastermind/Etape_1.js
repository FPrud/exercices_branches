const selectableColors = ["blue", "green", "red", "yellow"];
let secretCode = ["yellow", "green"];

const validColors = (testedCombination) => {
    for (const color of testedCombination) {
        if (!selectableColors.includes(color)) {
            return false;
        };
    };
    return true;
};

// console.log("Couleur non valides :",validColors(["white","green"]));
// console.log("Couleurs valides : ",validColors(["green","red"]));

const validLength = (testedCombination) => {
    return testedCombination.length === secretCode.length;
};

// console.log("Code trop long :", validLength(["red", "green", "blue"]));
// console.log("Code de la bonne longueur :", validLength(["green", "red"]));

const verifyCombination = (testedCombination) => {
    for (let i = 0; i < testedCombination.length; i++) {
        if (testedCombination[i] !== secretCode[i]) {
            return false;
        }
    }
    return true;
};

// console.log("Mauvaise combinaison :", verifyCombination(["green", "red"]));
// console.log("Bonne combinaison :", verifyCombination(["yellow", "green"]));

const game = (testedCombination, remainingAttempts) => {
    if (remainingAttempts > 0) {
        if (validColors(testedCombination)) {
            if (validLength(testedCombination)) {
                if (verifyCombination(testedCombination)) {
                    return "Bravo, vous avez trouvé la bonne combinaison."
                };
                return "Pas de chance. Veuillez rééssayer."
            };
            return "Saisie invalide : votre code n'a pas le bon nombre de couleurs. Veuillez proposer deux couleurs parmis blue, green, red ou yellow."
        };
        return "Saisie invalide : une ou des couleurs ne sont pas dans le jeu. Veuillez proposer deux couleurs parmis blue, green, red ou yellow.";
    };
    return "Fin de la partie.";
};

console.log(game(["green", "violet"], 12));
console.log(game(["green", "blue", "yellow"], 11));
console.log(game(["green", "red"], 10));
console.log(game(["yellow", "green"], 9))