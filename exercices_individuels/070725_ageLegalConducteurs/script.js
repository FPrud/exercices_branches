const hasLegalAgeToDrive = (age) => {
    if (age >= 17) {
        return true;
    } else if (age < 17) {
        return false;
    };
};

console.log(hasLegalAgeToDrive(22));
console.log(hasLegalAgeToDrive(15));
console.log(hasLegalAgeToDrive(17));