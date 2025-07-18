const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow

// 1.Pour commencer, affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string
console.log("Le fichier data.json est de type", typeof (data), ".");

// 2.Affiche dans la console, le premier objet du tableau d’objets
console.log("Le premier objet du tableau est", data[0], ".");

// 3.Affiche dans la console, le nombre d’objects contenu dans le tableau
console.log("Il y a", data.length, "objets dans le tableau.");

// 4.Affiche dans la console, les informations de la candidate arrivée au 4e rang
for (const item of data) {
    if (item.ranking === 4) {
        console.log("La candidate arrivée au 4ème rang présente ces informations :", item)
    }
};

// chercher l'équivalence avec les fonctions .filter et .find, qui permettent de faire la même chose en 1 ligne

// 5.Affiche dans la console, l’âge moyen des candidates
let ageTotal = 0;
for (const item of data) {
    ageTotal += item.age;
}

console.log("L'âge moyen des candidates est de", ageTotal / data.length, ".");