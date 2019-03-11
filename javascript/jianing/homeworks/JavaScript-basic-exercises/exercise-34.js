//Write a JavaScript program to find the larger number from the two
// given positive integers, the two numbers are in the range 40. .60 inclusive.
function getLargerNum(x, y) {
    if (x <= 60 && x >= 40 && y <= 60 && y >= 40) {
        return Math.max(x, y)
    }
    return false;
}
console.log(getLargerNum(7, 45));
console.log(getLargerNum(41, 45));