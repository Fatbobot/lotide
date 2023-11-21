const findKey = require("../findKey");
const assertEqual = require("../assertEqual");

const starNames = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(
  findKey(starNames, (x) => x.stars === 2),
  "noma"
);
assertEqual(
  findKey(starNames, (x) => x.stars === 3),
  "Akaleri"
);
assertEqual(
  findKey(starNames, (x) => x.stars === 1),
  "Blue Hill"
);
