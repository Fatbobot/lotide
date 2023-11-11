const assertEqual = require('./assertEqual')

//head function
const head = function(arr) {
  if (arr === []){
    return undefined;
  }else{
  return(arr[0]);
  }
}

module.exports = head;