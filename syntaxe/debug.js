// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let article1 = 10;
let article2 = 20;

// Nous calculons le total
let totalPrice = article1 + article2;

// Prix d'un troisieme article
let article3 = 50;

// Nous ajoutons a3 au total
totalPrice += article3;

//Nous appliquons 20% de reduction
let reduction = totalPrice * 0.2;
let finalPrice = totalPrice - reduction;

console.log("Le prix total avant reduction est de : ", totalPrice);
console.log("Le prix total après reduction est de : ", finalPrice);