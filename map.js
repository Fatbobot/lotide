const assertArraysEqual = require("./assertArraysEqual");

//test cases

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
// test callbacks

const multiplier = (x) => x / 2 + 4;
const exclaim = (x) => x + "!";

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, exclaim), [
  "ground!",
  "control!",
  "to!",
  "major!",
  "tom!",
]);
assertArraysEqual(map(numbers, multiplier), [4.5, 5, 5.5, 6, 6.5]);
assertArraysEqual(map(numbers, exclaim), ["1!", "2!", "3!", "4!", "5!"]);
