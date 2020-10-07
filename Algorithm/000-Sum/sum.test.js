const sum = require('./sum');


describe('sum(a, b)', () => {
  test('Adds 1 + 2 to equal 3', ()=> {
    expect(sum(1,2)).toBe(3);
  });
  test('Adds -1 + 4 to equal 3', ()=> {
    expect(sum(-1,4)).toBe(3);
  });
});