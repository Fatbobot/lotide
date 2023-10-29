const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log (`Assertion Passed: ${actual} === ${expected}`);
    return true;

  } else {
    console.log (`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function(arrOne, arrTwo) {

  if (arrOne.length !== arrTwo.length){
    return false;
  }

  for (const item in arrOne) {
    if (arrOne[item] !== arrTwo[item]) {
      return false;
      
    } else {
      return true;
    }
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);