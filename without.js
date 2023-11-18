

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (const item in arrOne) {
    if (arrOne[item] !== arrTwo[item]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function(arrOne, arrTwo) {
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

const without = function(source, itemsToRemove) {
  const stuff = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      stuff.push(item);
    }
  };
  return stuff;
};

assertArraysEqual(without([1, 2, 3 , 4 , 5], [2, 3]), [1, 4, 5]);
assertArraysEqual(without(["1", "2", 3 , 4 , 5], ["2", 3]), ["1", 4, 5]);
assertArraysEqual(without([1, 2, 3 , 4 , 5], [2, 3, 5]), [1, 5]);
assertArraysEqual(without([1, 2, 3 , 4], [0, 1]), [2, 3 ,4]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"])

module.exports = without;
