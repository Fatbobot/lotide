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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    console.log (`Assertion failed: ${arrOne} !== ${arrTwo}`)
  }

  for (const item in arrOne) {
    if (arrOne[item] !== arrTwo[item]) {
      console.log (`Assertion failed: ${arrOne} !== ${arrTwo}`)
      
    } else {
      console.log (`Assertion passed: ${arrOne} === ${arrTwo}`)
    }
  }
}

const middle = function (arr) {
  const middleVals = [];

  if (arr.length <= 2 ) {

  }else if ((arr.length % 2) === 0) {
    middleVals.push(arr[Math.floor(arr.length / 2) -1]);
    middleVals.push(arr[Math.floor(arr.length / 2)]);
  }else {
    middleVals.push(arr[Math.floor(arr.length / 2)]);
  }

  return(middleVals);
}

assertArraysEqual(middle([1, 2 ,3 ,4 ,5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 4]), [2]);
assertArraysEqual(middle([1, 2 ,3 ,4]), [2, 3]);