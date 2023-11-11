const assertEqual = require('../assertEqual');
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assertEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assertEqual(head(['5']), '5'); 
  });
  it("returns '5' for ['5, 6, 7']", () => {
    assertEqual(head([5,6,7]), 5); 
  });
  it("returns 'Hello' for [Hello, Lightouse, Labs]", () => {
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  it("returns 'undefined' for []", () => {
    assertEqual(head([]), undefined); 
  });
});