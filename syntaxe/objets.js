// on s'entraine à déclarer des objets
const restaurant = {
    name: "McDonald's",
    menus: [
        { name: "Mc First", price: 6 },
        { name: "Best Of", price: 11 },
        { name: "Happy Meal", price: 4 },
        { name: "Mc Morning", price: 5 }
    ]
};


let totalPrice = 0;
/*for (let i = 0; i < restaurant.menus.length; i++) {
    totalPrice += restaurant.menus[i].price;
};*/
for (menuIndex of restaurant.menus){
    totalPrice += menuIndex.price;
}
console.log(totalPrice);