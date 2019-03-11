//Write a JavaScript program to check from two given integers, if one
// is positive and one is negative.
function checkNumber(int1, int2) {
    return int1 * int2 < 0 ? true : false;
}
alert(checkNumber(8, -16));
alert(checkNumber(-8, -16));
alert(checkNumber(-8, 16));
//bug: how to make sure two integers were inputed?