//002 Write a JavaScript function to print the contents of the current window.

//146 Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.
*/

/*function computeCubes(integer) {
  var sum = 0;
  for(var i = 1; i <= integer; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}
computeCubes(5)
*/


/*147. Write a JavaScript program to compute the sum of all digits that occur in a given string.  Go to the editor
Click me to see the solution
*/
/*
function sumOfAllDigits(string) {
  var arr = string.split('');
  var numArr = [];
  for(var i in arr) {
    numArr.push(Number(arr[i]));
  }
  var realNum = [];
 for(var j in numArr) {
   if(!isNaN(numArr[j])) {
     realNum.push(numArr[j])
   }
 }
 var sum = 0
 for(var k in realNum) {
   sum += realNum[k];
 }
 return sum;
}
sumOfAllDigits('abc12bbuu72');



function sumOfAllDigits(string) {
  var arr = string.split('');
  var numArr = [];
  for(var i in arr) {
    numArr.push(Number(arr[i]));
  }
  var sum = 0;
  
 for(var j in numArr) {
   if(!isNaN(numArr[j])) {
    sum += numArr[j];
   }
 }

 return sum;
}
sumOfAllDigits('abc12bb9.6.5uu72');
*/
//148 Write a JavaScript program to swap two halves of a given array of integers of even length.
/*
function swapHalf(integers) {
  if(integers.length % 2 !== 0) {
    return false;
  } 
  for (var i = 0; i < integers.length / 2; i++) {
    var ori = integers[i];
    integers[i] = integers[i + integers.length / 2];
    integers[i + integers.length / 2] = ori;
  }
return integers;
}
swapHalf([1, 2, 3, 4])

//149 Write a JavaScript program to change the capitalization of all letters in a given string*/
/*function changeCase(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if(/[a-z]/.test(str[i])) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

changeCase("Abc")



//150 Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
/*function swapPairs(numbers)  {
  var newArr = [];
  for(var i = 0; i < numbers.length - 2; i++) {
     newArr.push(numbers.slice(i, i + 2));
  }
return newArr;
}

swapPairs([1, 2, 3, 4])// doesnt work yet!
*/