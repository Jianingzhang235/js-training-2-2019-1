// Write a JavaScript program to compute the absolute difference between
// a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 
function absoluteBetw(num) {
    if (num > 19) {
        return Math.abs((num - 19) * 3);
    } else {
        return Math.abs(num - 19);
    }
}
console.log(absoluteBetw(29));
console.log(absoluteBetw(2));