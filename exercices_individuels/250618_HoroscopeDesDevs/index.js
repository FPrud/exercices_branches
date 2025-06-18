const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

// TODO: recupère l'élément <div id="horoscope">

const horoscopeHTML = document.querySelector("#horoscope")
const article = document.createElement("article")

for (const item of horoscope) {
  const title = document.createElement("h2");
  const description = document.createElement("p");
  title.innerText=item.sign;
  description.innerText=item.description;
  article.appendChild(title);
  article.appendChild(description);
}
horoscopeHTML.appendChild(article);