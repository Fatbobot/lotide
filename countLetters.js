//returns a number representing how many non space characters are in a string
const countLetters = function (str) {
  const modifiedStr = str.split(" ").join('')
  const results = {};
  for (const letter of modifiedStr) {
    if (letter) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
    
  }
  return results;
};
module.exports = countLetters;