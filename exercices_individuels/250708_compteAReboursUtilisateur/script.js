// Nous souhaitons créer un décompte.

// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

const counter = () => {
    let message = "";
    let chosenNumber = Number(prompt("Entrez un nombre entre 1 et 10."));

    if (chosenNumber > 0 && chosenNumber <= 10) {
        for (i = chosenNumber; i >= 0; i--) {
            message += i;
        };
        alert(message);
    } else {
        alert("Votre nombre ne respecte pas la limite.")
        counter();
    };
};

counter();