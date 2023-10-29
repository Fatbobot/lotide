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