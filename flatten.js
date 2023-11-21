const flatten = function (input) {
  const output = [];

  for (const item of input) {
    if (Array.isArray(item)) {
      for (const move of item) {
        output.push(move);
      }
    } else {
      output.push(item);
    }
  }
  return output;
};

module.exports = flatten;
