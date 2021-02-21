import { SumOf1dArray } from '.';

describe('1480-sumOf1dArray', ()=> {
  test('SumOf1dArray([1,2,3,4]) retuns [1,3,6,10]',()=> {
    expect(SumOf1dArray([1,2,3,4])).toStrictEqual([1,3,6,10]);
  });
});