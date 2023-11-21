//receives an array and a callback.
//Function pushes array values into new array until it reaches a value specified in callback function
const takeUntil = function (arr, callback) {
  const results = [];
  for (const item of arr) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;
