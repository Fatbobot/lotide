const flatten = function(input) {
  output = [];
  
  for (const item of input) {
    if (Array.isArray(item)) {
      for (const move of item) {
      output.push(move);
      }

    }else {
      output.push(item);
    }
  } 
  return (output);
}

flatten([1, 2, [3, 4], 5, [6]])