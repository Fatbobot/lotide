const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3]), [1, 4, 5]);
assertArraysEqual(without(["1", "2", 3, 4, 5], ["2", 3]), ["1", 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3, 5]), [1, 5]);
assertArraysEqual(without([1, 2, 3, 4], [0, 1]), [2, 3, 4]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
