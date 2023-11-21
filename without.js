const without = function (source, itemsToRemove) {
  const sourceWithout = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      sourceWithout.push(item);
    }
  }
  return sourceWithout;
};

module.exports = without;
