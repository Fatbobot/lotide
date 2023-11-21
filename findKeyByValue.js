//receives object and value
//returns key associated with value
const findKeyByValue = function (obj, val) {
  for (const item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
};

module.exports = findKeyByValue;
