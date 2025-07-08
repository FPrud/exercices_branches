const isPositiveOrNegative = (testedNumber) => {
    if (testedNumber > 0) {
        return true;
    } else if (testedNumber < 0) {
        return false;
    }
    return null;
}

console.log(isPositiveOrNegative(6));
console.log(isPositiveOrNegative(-8));
console.log(isPositiveOrNegative(0));