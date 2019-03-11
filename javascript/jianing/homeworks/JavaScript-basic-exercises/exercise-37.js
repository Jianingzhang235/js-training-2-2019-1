//Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case
function getFirstChars(str) {
    var newStr = "";
    if (str.length >= 3) {
        newStr = str.slice(0, 3).toLowerCase().concat(str.slice(3));
    } else if (str.length < 3) {
        newStr = str.toUpperCase();
    }
    return newStr;
}
console.log(getFirstChars("ABcdE"));
console.log(getFirstChars("st"));
console.log(getFirstChars(""));