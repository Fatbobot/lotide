//prints an assertion if two array inputs are equal
const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arrOne, arrTwo) {
  if (arrOne.length === 0) {
    return undefined;
  }
  if (arrOne.length !== arrTwo.length) {
    console.log(`Assertion failed: ${arrOne} !== ${arrTwo}`);
  }

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Assertion failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;
