//Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
//input:a sting and a character;
//output: true,false;
function charInStr(str, char) {
    var count = 0

    for (var i = 0; i < str.length; i++) {

        if (str[i] === char) {
            count++;
        }
    }
    if (count <= 4 && count >= 2) {
        return true;
    }
    return false;


}
console.log(charInStr('abcaabc', 'a'));