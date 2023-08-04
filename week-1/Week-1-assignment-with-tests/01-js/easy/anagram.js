/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

const strToArr = (str) => str.toLowerCase().split("");
const areSetsEqual = (xs, ys) => xs.size === ys.size && [...xs].every((x) => ys.has(x));

function isAnagram(str1, str2) {
  const set1 = new Set(strToArr(str1));
  const set2 = new Set(strToArr(str2));
  return areSetsEqual(set1, set2);
}

module.exports = isAnagram;
