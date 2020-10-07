const sumOf1dArray = require('./SumOf1dArray');

describe('1480-sumOf1dArray', ()=> {
  test('sumOf1dArray([1,2,3,4]) retuns [1,3,6,10]',()=> {
    expect(sumOf1dArray([1,2,3,4])).toStrictEqual([1,3,6,10]);
  });
});