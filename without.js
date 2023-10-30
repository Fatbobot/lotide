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

assertArraysEqual([1, 2, 3], [1, 2 ,3]);


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

const without = function(source, itemsToRemove) {
  const assertion = source.slice();
  const stuff = []
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      stuff.push(item);
      // console.log("source", source);
      // console.log("source copy", sourceCopy);
      // console.log("stuff", stuff)
    }
  }
  assertArraysEqual(source, assertion);
  return `The new array is : ${stuff}`;
}


console.log(without([1, 2, 3 , 4 , 5], [2, 3]));
console.log(without(["1", "2", 3 , 4 , 5], ["2", 3]));
console.log(without([1, 2, 3 , 4 , 5], [2, 3, 5]));
console.log(without([1, 2, 3 , 4], [0, 1]));