//return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function (str) {
  const results = {};
  let counter = 0;
  for (const letter of str) {
    if (letter === " ") {
      counter++;
      continue;
    } else if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter++;
  }
  return results;
};
module.exports = letterPositions;
