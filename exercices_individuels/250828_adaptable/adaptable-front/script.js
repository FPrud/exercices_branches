const categorySelector = document.getElementById("categorySelector");
const bookmarkList = document.getElementById("bookmarkList");

async function getBookmarks() {
    try {
        const responseBookmarks = await fetch(`http://localhost:3000/bookmarks`);

        if (!responseBookmarks.ok) {
            throw new Error(`Erreur lors de la récupération des données de coordonnées : ${responseBookmarks.statusText}`);
        };

        const dataBookmarks = await responseBookmarks.json();

        for (item of dataBookmarks){
        bookmarkList.innerHTML += `<li><a href="${item.url}" target="_blank">${item.name}</a> (${item.topic_id})</li>`;
    } 

    } catch (error) {
        console.error("Erreur", error.message);
        return null;
    };
};

getBookmarks();