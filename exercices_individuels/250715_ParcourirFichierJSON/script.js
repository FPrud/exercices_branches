const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow

// 1.Pour commencer, affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string
console.log(typeof(data));

// 2.Affiche dans la console, le premier objet du tableau d’objets
console.log(data[0]);