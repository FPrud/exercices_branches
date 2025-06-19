
// étape 1
const askNumber = () => {
    const userNumber = prompt(`Entrer un nombre`);
    return Number(userNumber);
};

/*// étape 2
const didIWin = () => {
    const givenNumber = askNumber();
    if (givenNumber < 22) {
        return (`Plus grand`);
    } else if (givenNumber > 22) {
        return (`Plus petit`);
    };
    return (`Bravo ! Vous avez deviné le nombre`);
};
alert(didIWin());
*/

//étape 3
const didIWin = () => {
    const givenNumber = askNumber();
    if (givenNumber === 22) {
        return true;
    };
    return false;
};

const gamePlay = () => {
    const givenNumber = askNumber();
    const trueOrFalse = didIWin();
    for (const round of didIWin()) {

    }
};

alert(gamePlay());

// par pitié n'éfface pas ça si tu es frustré