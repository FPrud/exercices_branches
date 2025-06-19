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


for (const item of horoscope) { // parcours les elements de horoscope, autant de fois qu'il y a de cell dans le tableau
const article = document.createElement("article") // créer la balise <article>
  const title = document.createElement("h2");// créer une boite vide <h2>
  const description = document.createElement("p");// créer une boite vide <p>
  title.innerText = item.sign;// j'associe item.sign à "title"
  description.innerText = item.description;// j'associe item.description à "description"
  article.appendChild(title); // on "colle / push / accroche" title dans article
  article.appendChild(description); // on "colle / push / accroche"  description dans article
horoscopeHTML.appendChild(article); // on "colle / push / accroche" article dans horoscopeHTML
}


/* //alternative propre avec .innerHTML
const horoscopeHTML = document.querySelector("#horoscope")
for(const item of horoscope) {
  horoscopeHTML.innerHTML +=`
    <article>
      <h2>${item.sign}</h2>
      <p>${item.description}</p>
    </article>
  `;
};
*/

/* //alternative avec forEach
const horoscopeHTML = document.querySelector("#horoscope")
horoscope.forEach((item)=>{
  horoscopeHTML.innerHTML +=`
    <article>
      <h2>${item.sign}</h2>
      <p>${item.description}</p>
    </article>
  `;
});
*/