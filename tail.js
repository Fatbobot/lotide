//tail function

const tail = function(arr) {
  const result = arr.slice(1);
  if (arr === []){
    return undefined;
  }else {
  return result;
  }

}

module.exports = tail;