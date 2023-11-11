const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log (`Assertion Passed: ${actual} === ${expected}`);
    return true;

  } else {
    console.log (`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};


const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    }else {
      results[letter] = 1;
    }
  }
  for (const remove in results) {
    if (remove === " ") {
      delete results[remove];
    }else if ( results[remove] === 1) {
      delete results[remove];
    }
  }
  return results
}
// countLetters("hello world")
// countLetters("what what what what what what")

module.exports = countLetters;