const findKey = function (obj, callback) {
  for (const item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }

  return undefined;
};

module.exports = findKey;
