// to find a value which is nearest to 100 from two different given integer values.
function nearestInteger(x, y) {
    if (x !== y) {
        return Math.abs(x - 100) < Math.abs(y - 100) ? x : y;
    }
    return false;
}

console.log(nearestInteger(7, 9));
console.log(nearestInteger(44, 44));