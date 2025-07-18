async function fetchOffers() {
    const body = document.querySelector("body");
    body.innerHTML = `<p id="loading-message">Chargement des données...</p>`;

    try {
        const response = await fetch("https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers");
        const offers = await response.json();
        console.log(offers);

        body.innerHTML = "";

        for (const item of offers) {
            
        document.querySelector("body").innerHTML +=`<h2 class="titre">${item.titre}</h2><p class="technologie">- ${item.technologie} -</p><p class="description">${item.description}</p><hr>`;
        };
    } catch (error) {
        console.error("Error fetching offers:", error);
        // Display an error message if something goes wrong
        body.innerHTML = `<p>Erreur lors du chargement des données. Veuillez réessayer.</p>`;
    }
};

fetchOffers();