const goodPairs = require("./goodPairs");

const tests = [
  {
    nums: [1, 2, 3, 1, 1, 3],
    result: 4,
  },
  {
    nums: [1, 1, 1, 1],
    result: 6,
  },
  {
    nums: [1, 2, 3],
    result: 0,
  },
];

describe(`goddPairs()`, () => {
  for (const i of tests) {
    test(`goodPairs() (${i.nums}) should return ${i.result}`, () => {
      expect(goodPairs(i.nums)).toStrictEqual(i.result);
    });
  }
});
