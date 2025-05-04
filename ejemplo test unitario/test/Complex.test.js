const Complex = require('../src/Complex');

describe('Complex Number Tests', () => {
    test('givenZero_thenRealPartIsZero_And_ImagPartIsZero', () => {

        const zero = new Complex(0, 0);

        expect(zero.getRealPart()).toBeCloseTo(0, 3);
        expect(zero.getImaginaryPart()).toBeCloseTo(0, 3);
    });

    test('givenZeroAndOne_whenZeroAddToOne_thenOneIsObtained', () => {

        const one = new Complex(1, 1);
        const zero = new Complex(0, 0);

        const result = zero.add(one);

        expect(result.equals(new Complex(1, 1))).toBeTruthy();
    });

    test('conjugateTest', () => {

        const num = new Complex(3, 4);

        expect(num.conjugate().equals(new Complex(3, -4))).toBeTruthy();
    });
});