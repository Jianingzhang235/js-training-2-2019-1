//Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirsL(str) {
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}
console.log(capitalizeFirsL("I am  a Chinese"));
