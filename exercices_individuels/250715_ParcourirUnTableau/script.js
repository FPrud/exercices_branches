const candidates = ['Le Filip', 'Ruby On The Nail', 'Leona Winter', 'Lula Strega', 'Misty Phoenix', 'Perseo', 'Norma Bell', 'Edeha Noire', 'Magnetica', 'Afrodite Amour'];

// 1.Accède au tableau pour afficher dans la console “Le Filip”
console.log(candidates[0]);

// 2.Accède au tableau pour afficher dans la console “Edeha Noire”
console.log(candidates[7]);

// 3.Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
for (const candidate of candidates){
    console.log(candidate);
};

// 4.(Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML:
for (const candidate of candidates){
    document.querySelector("#candidatesList").innerHTML += `<li>${candidate}</li>`;
};