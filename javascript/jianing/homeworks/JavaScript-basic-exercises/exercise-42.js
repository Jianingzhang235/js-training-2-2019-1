// Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode.
//Note: Strict mode - > 10, 15, 31: Soft mode - > 24, 22, 31 or 22, 22, 31
function increasingMode(x, y, z) {
  if (y > x && z > y) {
    return 'Strict mode';
  } else if (z > y) {
    return 'Soft mode';
  }
  return 'undefined';
}


console.log(increasingMode(4, 4, 5));
console.log(increasingMode(5, 6, 7));
console.log(increasingMode(8, 9, 9));