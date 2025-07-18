async function fetchLOTRMovies() {
    const res = await fetch("https://the-one-api.dev/v2/movie", { headers: { Authorization: 'bearer GXKQgofAy-eXooVgz2br' } });
    const dataBase = await res.json();
    for (const movie of dataBase.docs) {
        document.querySelector("#ul").innerHTML += `<li><h2>${movie.name}</h2> a couté ${movie.budgetInMillions} millions de dollars à produire.</li>`;
    }
};
fetchLOTRMovies();