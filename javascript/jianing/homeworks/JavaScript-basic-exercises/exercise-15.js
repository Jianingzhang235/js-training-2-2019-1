//Write a JavaScript program to get the difference between a given number and 13,
//if the number is greater than 13
//return double the absolute difference.
function doublediference(num) {
    if (num > 13) {
        return (num - 13) * 2;
    } else {
        return 13 - num;
    }
}
console.log(doublediference(29));
console.log(doublediference(2));