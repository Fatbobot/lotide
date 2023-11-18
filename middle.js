const middle = function(arr) {
  const middleVals = [];

  if (arr.length <= 2) {
    return middleVals;
  } else if (arr.length % 2 === 0) {
    middleVals.push(
      arr[Math.floor(arr.length / 2) - 1],
      arr[Math.floor(arr.length / 2)]
    );
  } else {
    middleVals.push(arr[Math.floor(arr.length / 2)]);
  }

  return middleVals;
};

module.exports = middle;
