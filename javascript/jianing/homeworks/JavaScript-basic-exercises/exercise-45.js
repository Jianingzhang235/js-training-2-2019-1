// Write a JavaScript program to check two given integer values and 
//return true if one of the number is 15 or if their sum or difference is 15.
function isIt15(intr1, intr2) {
    return intr1 === 15 || intr2 === 15 || intr1 + intr2 === 15 || Math.abs(intr1 - intr2) === 15;
}

console.log(isIt15(2, 13));
console.log(isIt15(24, 114));
console.log(isIt15(57, 76));