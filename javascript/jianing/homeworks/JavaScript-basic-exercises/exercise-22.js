//Write a JavaScript program to remove a character at the specified 
//position of a given string and return the new string.
//input: a string and a position;
//output: a new string;
function removeChar(str, n) {
    var newStr = "";
    if (str.length < 1) {
        return newStr;
    } else if (str.length >= 1 && n < str.length) {
        newStr = str.substring(0, n).concat(str.substring(n + 1));
        return newStr;
    } else {
        return newStr = str;
    }
}
alert(removeChar("hh2h13889", 7));