//prints an assertion comparing an object to expected object result
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(actual)}) === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)}) !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;
