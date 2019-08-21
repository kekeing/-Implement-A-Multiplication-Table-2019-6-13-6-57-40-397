const createMultiplyTable = require('../main');

it ('should add two numbers', () => {
    expect(createMultiplyTable(2, 4)).toBe("2*2=4\r\n2*3=6 3*3=9\r\n2*4=8 3*4=12 4*4=16\r\n");
    });

