const chosingANumber = () => {
    player1Number = Number(prompt(`Joueur 1 : Choisissez un nombre`));
};

let player1Number;

const askNumber = () => {
    return Number(prompt(`Joueur 2 : Tentez de deviner le nombre`));
};

const didIWin = (givenNumber) => {
    if (givenNumber === player1Number) {
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    } else if (givenNumber < player1Number) {
        alert("Plus grand");
        return false;
    } else if (givenNumber > player1Number) {
        alert("Plus petit");
        return false;
    }
};

const gamePlay = () => {
    chosingANumber();
    let hasWon = false;
    while (!hasWon) {
        const number = askNumber();
        hasWon = didIWin(number);
    }
};

gamePlay();

// Les étapes 5 et 6 ne sont pas dans mes capacités aujourd'hui.