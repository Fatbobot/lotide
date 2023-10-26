const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log (`Assertion Passed: ${actual} === ${expected}`);
    return true;

  } else {
    console.log (`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//tail function

const tail = function(arr) {
  const result = arr.slice(1);
  return result;

}
