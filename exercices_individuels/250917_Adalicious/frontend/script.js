const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const usernameSpan = document.getElementById('username');
const menuTable = document.getElementById('menuTable');

// Identification
if (firstNameInput) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = firstNameInput.value;
        if (userName) {
            localStorage.setItem('userName', userName);
            window.location.href = 'menu.html';
        };
    });
};

fetchMenus();
const storedName = localStorage.getItem('userName');
usernameSpan.textContent = storedName;

// Affichage du menu
async function fetchMenus() {
    try {
        const res = await fetch(`http://localhost:3000/menu`);
        const menu = await res.json();

        for (const item of menu) {
            menuTable.innerHTML += `
                <div class="menuItem">
                    <p class="image">${item.plate_image}</p>
                    <h2>${item.plate_name}</h2>
                    <p>${item.plate_description}</p>
                    <button class="button">Commander</button>
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