const letterPositions = function(str) {
  const results = {};
  var counter = 0;
  for (const letter of str) {
    if (results[letter] === " "){
    }else if (results[letter]) {
      results[letter].push(counter);
    }else {
    results[letter] = [counter];
    }
    counter ++;
  }
  console.log(results)
  return results;
}


const value = letterPositions("hello")