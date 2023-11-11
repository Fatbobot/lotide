const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5,6,7]), [6, 7]);
  });
  it("returns '2' for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]).length, 2); 
  });
  it("returns '['Lighthouse', 'Labs']' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});

