const assertEqual = require('./assertEqual')

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

//head function
const head = function(arr) {
  return(arr[0]);
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello")
assertEqual(head([]))