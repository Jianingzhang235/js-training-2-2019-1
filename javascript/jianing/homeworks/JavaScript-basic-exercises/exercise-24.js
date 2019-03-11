function addFirstChar(string) {
    var newStr = string[0].concat(string + string[0]);
    return newStr;
}
alert(addFirstChar('s'));