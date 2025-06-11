// On souhaite creer une app qui permet de dire qui a les clefs de l'ecole
// L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
// On donne en parametre, le prenom
// On va avoir un tableau avec les noms
// des personnes qui ont les clefs :
// ['Pierre', 'Laure', 'Mathilde', 'Vi']
// console.log(hasKey('Jerem')) // affiche 'non'
// console.log(hasKey('Laure')) // affiche 'oui'
/*
const hasKey = (firstname) =>{
    const personsWithKey = ["Pierre", "Laure", "Mathilde", "Vi"];
    if(personsWithKey.includes(firstname)
    ){
        return `Oui, ${firstname} a les clés de l'école.`;
    };
    return `Non, ${firstname} n'a pas les clés de l'école.`;
};

console.log(hasKey("Laure"));
console.log(hasKey("Jérémie"));
*/

// BONUS, level++ :
// L'objectif est de remplacer le tableau par un tableau d' object
// Exemple
// [{firstname: Pierre, hasKey: true},{firstname: Jerem, hasKey: false}]
// Et la fonction ne prend plus de paramètre mais renvoie la liste (sous forme de tableau) des personnes qui ont les clefs
const hasKey = () =>{
    const keyHolders = [
        {firstname : "Pierre", hasKey : true},
        {firstname : "Laure", hasKey : true},
        {firstname : "Mathilde", hasKey : true},
        {firstname : "Vi", hasKey : true},
        {firstname : "Jérémie", hasKey : false},
        {firstname : "Vincent", hasKey : false}
    ];
    let tabResult = [];
    for(let i=0; i<keyHolders.length; i++){
        if(keyHolders[i].hasKey){
        tabResult.push(keyHolders[i].firstname);
        };
    };
    return tabResult;
};

console.log(hasKey());