//Write a JavaScript program to check if the last digit of the three given positive integers is same.

function isSameLastDigit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && x % 10 === z % 10 && x % 10 === z % 10;
  }
  return false;
}
console.log(isSameLastDigit(21, 11, 91));
console.log(isSameLastDigit(2, 13, 22));
console.log(isSameLastDigit(22, 123, 233));
