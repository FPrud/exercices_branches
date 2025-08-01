const HTMLcityInput = document.getElementById("cityInput");
const HTMLsendButton = document.getElementById("sendButton");
const HTMLcity = document.getElementById("city");
const HTMLgps = document.getElementById("gps");
const HTMLtemperature = document.getElementById("temperature");
const HTMLdetails = document.getElementById("details");

HTMLsendButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const userCityInput = HTMLcityInput.value.trim();
    console.log("L'utilisateur a recherché :", userCityInput);

    const cityData = await getCoordinates(userCityInput);

    if (cityData) {
        console.log("Coordonnées pour", userCityInput, ":", cityData.lat, cityData.lon);
        HTMLcity.innerText = cityData.cityName;
        HTMLgps.innerText = `Coordonnées GPS : ${cityData.lat}, ${cityData.lon}`;

        const weatherData = await getWeather(cityData.lat, cityData.lon);

        if (weatherData) {
            const currentTemp = weatherData.current.temperature_2m;
            HTMLtemperature.innerText = `${currentTemp}°C`;
            HTMLdetails.innerText = "Température actuelle";
            console.log("Température :", currentTemp);
        } else {
            HTMLtemperature.innerText = "Météo non disponible";
            console.log("Erreur : Impossible d'obtenir la météo pour", userCityInput);
        };
    } else {
        HTMLcity.innerText = "Ville non trouvée";
        HTMLgps.innerText = "";
        HTMLtemperature.innerText = "-";
        HTMLdetails.innerText = "Vérifiez le nom de la ville";
        console.log("Erreur : Impossible d'obtenir les coordonnées pour", userCityInput);
    };
});

async function getCoordinates(userCity) {
    try {
        const responseCoord = await fetch(`https://nominatim.openstreetmap.org/search?q=${userCity}&format=json&addressdetails=1&limit=1`);

        if (!responseCoord.ok) {
            throw new Error(`Erreur lors de la récupération des données de coordonnées : ${responseCoord.statusText}`);
        }

        const dataCoord = await responseCoord.json();

        if (dataCoord.length > 0) {
            const firstResult = dataCoord[0];
            const cityName = firstResult.address.city;
            return {
                cityName: cityName,
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
    }
}

async function getWeather(lat, lon) {
    console.log("Requête météo pour lat:", lat, "lon:", lon);
    try {
        const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);

        if (!responseWeather.ok) {
            throw new Error(`Erreur lors de la récupération des données météo : ${responseWeather.statusText}`);
        }

        const dataWeather = await responseWeather.json();
        console.log("Données météo brutes :", dataWeather);

        if (dataWeather.current !== 'undefined') {
            return dataWeather;
        } else {
            console.log("Données de température non trouvées dans la réponse météo.");
            return null;
        }
    } catch (error) {
        console.error("Erreur dans getWeather:", error.message);
        return null;
    };
};