// Écris une boucle FOR qui affiche dans la console tous les nombres de 0 à 99.
// Écris le même compteur avec une boucle WHILE.
// Réflexion : Quel type de boucle te semble le plus approprié pour cette application ?
// Ecris un compteur qui affiche tous les nombres de 50 à 99 (avec la boucle de ton choix).
// Ecris un compteur qui affiche tous les nombre de 49 à 1 (avec la boucle de ton choix).

//boucle for
for (i = 0; i < 100; i++) {
    console.log(i);
};

//boucle while
let j = 0;
while (j < 99) {
    j++;
    console.log(j);
};

//la boucle la plus pertinente dans ce contexte me semble être la boucle for car elle est utilisable sans avoir de variable à déclarer au préalable.

//compteur de 50 à 99
for (k = 50; k < 100; k++) {
    console.log(k);
};

//compteur de 49 à 1 (méthode while)
let l = 50;
while (l > 1) {
    l--;
    console.log(l);
};