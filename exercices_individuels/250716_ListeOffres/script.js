async function fetchOffers() {
    const response = await fetch("https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers");
    const offers = await response.json();
    for (const item of offers) {
        document.querySelector("body").innerHTML +=`<h2 class="titre">${item.titre}</h2><p class="technologie">- ${item.technologie} -</p><p class="description">${item.description}</p><hr>`;
    }
};

fetchOffers();