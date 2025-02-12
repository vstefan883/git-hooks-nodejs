const mult = require('../src/mult')

it('Should calculate correct mult',()=>{
    const result = mult(2,5)
    expect(result).toBe(10)
});