const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log (`Assertion Failed: ${actual} !== ${expected}`);
    return false;

  } else {
    console.log (`Assertion passed: ${actual} === ${expected}`);
    return true;
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

const eqObjects = function ( objOne, objTwo) {
  keys1 = Object.keys(objOne)
  keys2 = Object.keys(objTwo)

  if (!(keys1.length === keys2.length)) {
    return false
  }
  for (const item of keys1) {
    if (Array.isArray(objOne[item]) && Array.isArray(objTwo[item])) {
      if (!eqArrays(objOne[item], objTwo[item])) {
        return false;
      }
    } else if (objOne[item] !== objTwo[item]) {
      return false;
    }
  }
  return true
}

const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log (`✅✅✅ Assertion passed: ${inspect(actual)}) === ${inspect(expected)}`);
  }else {
    
  console.log (`🛑🛑🛑 Assertion failed: ${inspect(actual)}) !== ${inspect(expected)}`);
  }
}
// const stuff = {hello : "hi", goodbye: "cya"}
// const test1 = {}
// const test2 = {numbers: [1 , 2 ,3 , 4], words: ["hello", "shishkabob"], boolean: true}
// assertObjectsEqual(stuff, {hello : "hi", goodbye: "cya"})
// assertObjectsEqual(test1, {})
// assertObjectsEqual(test2, {numbers: [1 , 2 ,3 , 4], words: ["hello", "shishkabob"], boolean: true})

module.exports = assertObjectsEqual;