// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10;
let a2 = 20;

// Nous calculons le total
let totalPrice = a1 + a2;

// Prix d'un troisieme article
let a3 = 50;

// Nous ajoutons a3 au total
totalPrice += a3;

//Nous appliquons 20% de reduction
let reduction = totalPrice * 0.2;
let finalPrice = totalPrice - reduction;

console.log("Le prix total avant reduction est de : ", totalPrice);
console.log("Le prix total après reduction est de : ", finalPrice);