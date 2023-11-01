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

const eqObjects = function ( objOne, objTwo) {
  keys1 = Object.keys(objOne)
  keys2 = Object.keys(objTwo)

  if (!(keys1.length === keys2.length)) {
    return false
  }
  for (const item of keys1) {
    if (Array.isArray(item) && eqArrays(objOne.item, objTwo.item)) {
      for (const stuff of item) {

        if(!(objOne.item[stuff] === objTwo.item[stuff]))

        return false
      }
    }
    else if (!(objOne.item === objTwo.item)) {
      
      return false
    } 
  }
  return true
}


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] }
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const elseLongSleeveMultiColorShirtObject= {colors: ["red", "blue"], size: "medium", sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject))

console.log(eqObjects(longSleeveMultiColorShirtObject, elseLongSleeveMultiColorShirtObject))