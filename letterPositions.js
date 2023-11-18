const letterPositions = function (str) {
  const results = {};
  var counter = 0;
  for (const letter of str) {
    if (letter === " ") {
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
