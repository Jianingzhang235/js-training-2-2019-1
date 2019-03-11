// Write a JavaScript program to check if a given number in 
//the range 40..10000 presents in two number (in same range).
//For example 40 presents in 400 and 4000.
function numberPresent(x) {
    var x = 40;
    var y = x * 10;
    var z = x * 100;
    for (; x <= 100; x++) {
        var str = x + ' persents in ' + y + ' and ' + z;
    }
    return str;
}
console.log(numberPresent())