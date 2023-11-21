//returns a number representing how many non space characters are in a string
const countLetters = function (str) {
  const results = {};
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  for (const remove in results) {
    if (remove === " ") {
      delete results[remove];
    } else if (results[remove] === 1) {
      delete results[remove];
    }
  }
  return results;
};

module.exports = countLetters;
