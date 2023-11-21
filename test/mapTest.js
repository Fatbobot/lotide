const assertArraysEqual = require("./assertArraysEqual");
const map = require ("../map")
//test cases

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
// test callbacks

const multiplier = (x) => x / 2 + 4;
const exclaim = (x) => x + "!";

assertArraysEqual(map(numbers, multiplier), [4.5, 5, 5.5, 6, 6.5]);
assertArraysEqual(map(numbers, exclaim), ["1!", "2!", "3!", "4!", "5!"]);
