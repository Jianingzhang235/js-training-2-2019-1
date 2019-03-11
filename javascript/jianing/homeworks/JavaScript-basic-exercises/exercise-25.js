//Check if a given positive number is a multiple of 3 or a multiple of 7
//input: a positive num;
//output: true of false; if give a negative num, return false;
function multipleOf3Or7(number) {
    if (number > 0 && (number % 3 === 0 || number % 7 === 0)) {
        return true;
    }
    return false;
}
alert(multipleOf3Or7(18));