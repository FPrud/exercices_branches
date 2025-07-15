const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow

// 1.Pour commencer, affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string
// console.log(typeof (data));

// // 2.Affiche dans la console, le premier objet du tableau d’objets
// console.log(data[0]);

// // 3.Affiche dans la console, le nombre d’objects contenu dans le tableau
// console.log(data.length);

// // 4.Affiche dans la console, les informations de la candidate arrivée au 4e rang
// for (const item of data) {
//     if (item.ranking === 4){
//         console.log(item)
//     }
// };

// 5.Affiche dans la console, l’âge moyen des candidates
let ageTotal = 0;
for (const item of data){
    ageTotal+=item.age;
}

console.log(ageTotal/data.length);