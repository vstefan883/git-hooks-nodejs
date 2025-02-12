const sum = require('../src/sum');

it('Should calculate correct sum',()=>{
    const result = sum(2,5)
    expect(result).toBe(7)
});