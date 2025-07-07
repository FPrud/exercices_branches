const isPositiveorNegative = (testedNumber) => {
    if (testedNumber > 0) {
        return true;
    } else if (testedNumber < 0) {
        return false;
    }
    return null;
}

console.log(isPositiveorNegative(6));
console.log(isPositiveorNegative(-8));
console.log(isPositiveorNegative(0));