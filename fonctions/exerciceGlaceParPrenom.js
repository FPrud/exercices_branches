function parfumParPrenom(prenom){
    // annoncer les deux tableaux
    const prenoms = ["Salem", "Vincent", "Abdel", "Meyko", "Mattéo"];
    const parfums = ["caramel", "chocolat", "pistache", "cassis", "vanille"];
    // rechercher l'indice du prénom demandé, et rechercher l'indice avec le tableau parfums
    return parfums[prenoms.indexOf(prenom)];
};

console.log(parfumParPrenom("Vincent"));
console.log(parfumParPrenom("Abdel"));
console.log(parfumParPrenom("Mattéo"));
console.log(parfumParPrenom("Salem"));
console.log(parfumParPrenom("Meyko"));