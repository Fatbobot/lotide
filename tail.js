//tail function

const tail = function (arr) {
  const result = arr.slice(1);
  if (arr.length === 0) {
    return undefined;
  } else {
    return result;
  }
};

module.exports = tail;
