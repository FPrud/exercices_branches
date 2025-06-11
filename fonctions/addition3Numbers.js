//exercice 1
const addition3Numbers = () => {
    return `Le résultat de la somme est ${1 + 2 + 3}`;
};
console.log(addition3Numbers());

//exercice 2
let number1 = 1;
let number2 = 2;
let number3 = 3;
const addition3NumbersWithArg = (number1, number2, number3) => {
    return `Le résultat de la somme est ${number1 + number2 + number3}`;
};
console.log(addition3NumbersWithArg(number1, number2, number3));

//exercice 3
number1 = 2
number2 = 3
number3 = 4
console.log(addition3NumbersWithArg(number1, number2, number3));

number1 = 3
number2 = 4
number3 = 5
console.log(addition3NumbersWithArg(number1, number2, number3));

number1 = 4
number2 = 5
number3 = 6
console.log(addition3NumbersWithArg(number1, number2, number3));