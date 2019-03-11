function addBothEnds(string) {
    var newStr1, newStr2;
    if (string.length < 3) {
        return 'N/A';
    } else {
        var newStr1 = string.slice(-3);
        var newStr2 = newStr1.concat(string + newStr1);
        return newStr2;
    }
}
alert(addBothEnds('stre'));