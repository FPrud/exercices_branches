const aleatoire = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const createPrice = (articlesCount) => {
    //compte le nombre d'articles
    let tableau = [];
    for(let i=0; i<articlesCount; i++){
        tableau.push(aleatoire(1, 11));
    };
    return tableau;
};

console.log(createPrice(10));