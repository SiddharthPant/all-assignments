/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  cleanStr = str.toLowerCase().replace(/[^a-z]/gi, '');
  const reverse = cleanStr.toLowerCase().split("").reverse().join("");
  if (cleanStr === reverse) return true

  return false;
}

module.exports = isPalindrome;
