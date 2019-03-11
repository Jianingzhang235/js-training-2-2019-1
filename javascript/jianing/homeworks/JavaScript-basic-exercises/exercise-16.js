//compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumOfTwoNum(num1, num2) {
    var sum = 0;
    if (num1 !== num2) {
        sum = num1 + num2;
    } else {
        sum = (num1 + num2) * 3;
    }
    return sum;
}
console.log(sumOfTwoNum(29, 2));
console.log(sumOfTwoNum(2, 2));