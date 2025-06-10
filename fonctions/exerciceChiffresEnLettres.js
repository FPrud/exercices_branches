const chiffresToLettres = (x) => {
    // créer le tableau de nombres en lettres
    const nombresEnLettres = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
    // renvoyer le nombre en Lettres
    return nombresEnLettres[x];
};

 console.log(chiffresToLettres(2));