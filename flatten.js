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


const flatten = function(input) {
  const output = [];
  
  for (const item of input) {
    if (Array.isArray(item)) {
      for (const move of item) {
      output.push(move);
      }

    }else {
      output.push(item);
    }
  } 
  return (output);
}

// flatten([1, 2, [3, 4], 5, [6]])

module.exports = flatten;