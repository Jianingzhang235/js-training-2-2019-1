// Write a JavaScript program to check from three given
// numbers (non negative integers) that two or all of them have the same rightmost digit.
function isSameRightmost(x, y, z) {
    if (x > 0 && y > 0 && z > 0 && ((x % 10 === y % 10) || (x % 10 === z % 10) || (y % 10 === z % 10))) {
        return true;
    }
    return false;
}

console.log(isSameRightmost(3, 13, 23));
console.log(isSameRightmost(-4, 24, 114));
console.log(isSameRightmost(4, 57, 76));