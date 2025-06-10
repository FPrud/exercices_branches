//exercice 1
let nombreTest=4;
const nombreCarre=(nombreTest)=>{
    return nombreTest**2;
};
console.log(nombreCarre(nombreTest));

//exercice 2
let variableCarre=nombreCarre(nombreTest); //on indique que la nouvelle variable équivaut à la fonction

const multiplier10=(variableCarre)=>{
    return variableCarre*10;
};
console.log(multiplier10(variableCarre));

// exercice 3
