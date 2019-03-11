// Write a JavaScript program to check three given numbers, if the three numbers
//are same return 30 otherwise return 20 and if two numbers are same return 40.
function ifNumbersSame(x, y, z) {
    if (x === y && x === z && y === z) {
        return 30;
    } else if (x !== y && x !== z && y !== z) {
        return 20;
    }
    return 40;
}

console.log(ifNumbersSame(3, 3, 3));
console.log(ifNumbersSame(3, 4, 4));
console.log(ifNumbersSame(3, 4, 5));