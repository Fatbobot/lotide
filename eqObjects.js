const eqArrays = require("./eqArrays");

const eqObjects = function (objOne, objTwo) {
  let keys1 = Object.keys(objOne);
  let keys2 = Object.keys(objTwo);

  if (!(keys1.length === keys2.length)) {
    return false;
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
  return true;
};

module.exports = eqObjects;
