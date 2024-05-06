const { multiply } = require('./test'); // adjust the path to your test.js file

describe('multiply', () => {
    test('multiply 3 * 2 to equal 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });

    test('multiply 5 * 5 to equal 25', () => {
        expect(multiply(5, 5)).toBe(25);
    });

    test('multiply 0 * 5 to equal 0', () => {
        expect(multiply(0, 5)).toBe(0);
    });
});