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
