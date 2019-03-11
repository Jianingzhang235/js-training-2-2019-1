// check from two given integers if either one is 8 or their sum or difference is 8.
function isEight(x, y) {
    return ((x + y) === 8 || x === 8 || y === 8 || Math.abs(x - y) === 8);
}

console.log(isEight(8, 54));
console.log(isEight(7, 8));
console.log(isEight(11, 17));
console.log(isEight(-8, 0));