const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (const item in arrOne) {
    if (arrOne[item] !== arrTwo[item]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
