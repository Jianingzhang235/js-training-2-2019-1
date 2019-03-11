//Write a JavaScript program to compute the sum of 
//the two given integers, If the sum is in the range 50..80 return 65 other wise return 80

function SumTwoIgr(x, y) {
    if ((x + y) >= 50 && (x + y) <= 80) {

        return 65;
    }
    return 80;
}

console.log(SumTwoIgr(30, 40));
console.log(SumTwoIgr(50, 70));