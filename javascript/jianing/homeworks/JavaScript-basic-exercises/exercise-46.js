// Write a JavaScript program to check two given non-negative
//integers and if one of the number (not both) is multiple of 7 or 11.
function isMultiple(x, y) {
    if (x < 0 || y < 0) {
        return false;
    }
    if (x % 7 !== 0 && x % 11 !== 0 && y % 7 !== 0 && y % 11 !== 0) {
        return false;
    } else if ((x % 7 === 0 || x % 11 === 0) && (y % 7 === 0 || y % 11 === 0)) {
        return false;
    }

    /** if (x % 7 !== 0 && x % 11 !== 0 && y % 7 !== 0 && y % 11 !== 0) {
     *    return false;
     *} else if ((x % 7 === 0 || x % 11 === 0) && (y % 7 !== 0 && y % 11 !== 0)) {
     *   return true;
     *} else if ((x % 7 !== 0 && x % 11 !== 0) && (y % 7 === 0 || y % 11 === 0)) {
     *    return true;
     *}
     *return false;
     */
    return true;
}

console.log(isMultiple(7, 11));
console.log(isMultiple(7, 34));
console.log(isMultiple(12, 56));
console.log(isMultiple(17, 23));