//Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

function findMaxInt(integer) {
  var sum = 0;
  var i = 0;

  while (sum < integer) {
    sum += i++;
  }
  return i - 2;
}
