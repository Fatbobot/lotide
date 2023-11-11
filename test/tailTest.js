
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail.js');

assertArraysEqual(tail([5,6,7]), [6, 7]);
assertArraysEqual(tail([5,6,7]).length, 2);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
