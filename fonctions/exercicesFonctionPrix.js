function calcTotalPrice(articles){
    // total à zéro
    let total = 0;

    // faire une boucle
    for (const price of articles) {
        total += price;
    };

    /* équivaut à la boucle
    for (let i=0; i<articles.length; i++){
        total = total + articles[i];
    };
    */

    return total;
}

console.log(`Test 1 : ${calcTotalPrice([1,2,3])}`);
console.log(`Test 2 : ${calcTotalPrice([4,5,6])}`);
console.log(`Test 3 : ${calcTotalPrice([7,8,9])}`);