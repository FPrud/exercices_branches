const backInTime = (timeString) => {
    //extrait les nombre des strings
    //return les temps en number avec deux min de moins
    //ajoute " minutes" pour respecter le format
    return timeString.replace(/[^0-9]/g, '') - 2 + " minutes";
};

console.log(backInTime('17 minutes'));
console.log(backInTime('3 minutes'));
console.log(backInTime('25 minutes'));