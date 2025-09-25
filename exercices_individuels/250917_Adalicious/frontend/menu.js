const usernameSpan = document.getElementById('username');
const mainItem = document.getElementById('mainItem');
const orderButton = document.getElementById('orderButton');

fetchMenus();
const storedName = localStorage.getItem('userName');
usernameSpan.textContent = storedName;

// Affichage du menu
async function fetchMenus() {
    try {
        const res = await fetch(`http://localhost:3000/menu`);
        const menu = await res.json();

        for (const item of menu) {
            mainItem.innerHTML += `
                <div class="menuItem">
                    <p class="image">${item.plate_image}</p>
                    <h2>${item.plate_name}</h2>
                    <p>${item.plate_description}</p>
                    <a href=""><button class="button" id="orderButton">Commander</button></a>
                </div>
                `;
        };
    } catch (err) {
        console.error("Erreur :", err);
    };
};

// Envoi des commandes au serveur
async function commanderPlat(plat) {
    try {
        const resp = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: plat.id,
                plate: plat.plate,
                clientName: name,
            }),
        });
        const data = await resp.json();
        if (!data.ok) throw new Error(data.error);
        alert(`✅ ${data.message}`);
    } catch (err) {
        alert("❌ Impossible d'envoyer la commande.");
        console.error(err);
    }
}