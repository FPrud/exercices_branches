const HTMLcityInput = document.getElementById("cityInput");
const HTMLsendButton = document.getElementById("sendButton");
const HTMLcity = document.getElementById("city");
const HTMLgps = document.getElementById("gps");

HTMLsendButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const userCityInput = HTMLcityInput.value.trim();
    console.log("User searched for", userCityInput);
    const cityCoordinates = await getCoordinates(userCityInput);

    if (cityCoordinates) {
        console.log("Coordonnées pour", userCityInput, ":", cityCoordinates);
    } else {
        console.log("Erreur : Impossible d'obtenir les coordonnées pour", userCityInput);
    }
});

async function getCoordinates(userCity) {
    try {
        const responseCoord = await fetch(`https://nominatim.openstreetmap.org/search?q=${userCity}&format=json&addressdetails=1&limit=1`);
        
        if (!responseCoord.ok) {
            throw new Error(`Erreur lors de la récupération des données : ${responseCoord.statusText}`);
        };

        const dataCoord = await responseCoord.json();
        
        if (dataCoord.length > 0) {
            const firstResult = dataCoord[0];
            HTMLcity.innerText = firstResult.address.city;

            return {
                cityName: firstResult.address.city,
                lat: firstResult.lat,
                lon: firstResult.lon
            };
        } else {
            console.log("Aucun résultat trouvé pour", userCity);
            return null;
        }
    } catch (error) {
        console.error("Erreur dans getCoordinates:", error.message);
        return null;
    };
}

// async function getMeteo(lat, lon){
//     return 
// };