const defangIPaddr  = require('./defangIPaddr');

const name = 'defangIPaddr';
const tests = [
  {
    address: '1.1.1.1',
    result: '1[.]1[.]1[.]1',
  },
  {
    address: '255.100.50.0',
    result: '255[.]100[.]50[.]0',
  },
];

describe(`#${name}()`, () => {
  for (const i of tests) {
    test(`${name}(${i.address}) should return ${i.result}`, () => {
      expect(defangIPaddr(i.address)).toStrictEqual(i.result);
    });
  }
});