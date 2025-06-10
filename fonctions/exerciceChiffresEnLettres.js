const convertDigitToLetters = (digit) => {
    // créer le tableau de nombres en lettres
    const nombresEnLettres = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
    // renvoyer le nombre en Lettres
    if(digit>0&&digit<=nombresEnLettres.length){
    return nombresEnLettres[digit-1];
    };
    return "Ce n'est pas un nombre compris entre 1 et 10";
};

 console.log(convertDigitToLetters(2)); // affiche deux
 console.log(convertDigitToLetters(5)); // affiche cinq
 console.log(convertDigitToLetters(9)); // affiche neuf
 console.log(convertDigitToLetters(0)); // affiche Ce n'est pas un nombre compris entre 1 et 10
 console.log(convertDigitToLetters(11)); // affiche Ce n'est pas un nombre compris entre 1 et 10