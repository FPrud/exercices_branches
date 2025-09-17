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

const game = (testedCombination) => {
    let remainingAttempts = [12,11,10,9,8,7,6,5,4,3,2,1,0];
    for (let attempt of remainingAttempts) {
        if (attempt > 0) {
            if (validColors(testedCombination)) {
                if (validLength(testedCombination)) {
                    if (verifyCombination(testedCombination)) {
                        return `Essai ${12-attempt} : Bravo, vous avez trouvé la bonne combinaison.`
                    };
                    remainingAttempts --;
                    return `Essai ${12-attempt} : pas de chance. Veuillez rééssayer.`
                };
                remainingAttempts --;
                return `Essai ${12-attempt} : saisie invalide. Votre code n'a pas le bon nombre de couleurs. Veuillez proposer deux couleurs parmis blue, green, red ou yellow. Veuillez rééssayer.`
            };
            remainingAttempts --;
            return `Essai ${12-attempt} : saisie invalide. Une ou des couleurs ne sont pas dans le jeu. Veuillez proposer deux couleurs parmis blue, green, red ou yellow. Veuillez rééssayer.`
        };
        return `Essai ${12-attempt} : fin de la partie.`;
    };
};

console.log(game(["green", "violet"]));
console.log(game(["green", "blue", "yellow"]));
console.log(game(["green", "red"]));
console.log(game(["yellow", "green"]));