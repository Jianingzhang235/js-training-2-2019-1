//Write a JavaScript program to check if a string "Script" presents
// at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one.


function isThereStr(str) {
    if (str.slice(4, 10) !== "Script") {
        return str;
    } else {
        return str.slice(0, 4) + str.slice(10);
    }

}
alert(isThereStr('jva'));