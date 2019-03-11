// to check if two numbers are in range 40..60 or in the range 70..100 inclusive.
function numsInRange(x, y) {
    if ((x <= 60 && x >= 40 && y <= 60 && y >= 40) || (x <= 100 && x >= 70 && y <= 100 && y >= 70)) {
        return true;
    }
    return false;
}

console.log(numsInRange(17, 66));
console.log(numsInRange(51, 52));