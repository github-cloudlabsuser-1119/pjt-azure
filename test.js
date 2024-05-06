class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

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

