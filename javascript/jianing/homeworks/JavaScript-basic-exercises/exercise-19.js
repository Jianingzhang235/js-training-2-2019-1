// check a given integer is within 20 of 100 or 400.
function withinRange(num) {
    return Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20;
}

console.log(withinRange(99));
console.log(withinRange(419));