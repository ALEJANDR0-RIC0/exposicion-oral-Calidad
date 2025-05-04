class Complex {
    constructor(realPart = 0, imaginaryPart = 0) {
        this.realPart = realPart;
        this.imaginaryPart = imaginaryPart;
    }

    getRealPart() {
        return this.realPart;
    }

    getImaginaryPart() {
        return this.imaginaryPart;
    }

    abs() {
        return Math.sqrt(Math.pow(this.realPart, 2) + Math.pow(this.imaginaryPart, 2));
    }

    phase() {
        return Math.atan2(this.imaginaryPart, this.realPart);
    }

    conjugate() {
        return new Complex(this.realPart, -this.imaginaryPart);
    }

    reciprocal() {
        const scale = Math.pow(this.realPart, 2) + Math.pow(this.imaginaryPart, 2);
        return new Complex(this.realPart / scale, -this.imaginaryPart / scale);
    }

    add(complex) {
        return new Complex(
            this.realPart + complex.realPart,
            this.imaginaryPart + complex.imaginaryPart
        );
    }

    minus(complex) {
        return new Complex(
            this.realPart - complex.realPart,
            this.imaginaryPart - complex.imaginaryPart
        );
    }

    times(complex) {
        return new Complex(
            this.realPart * complex.realPart - this.imaginaryPart * complex.imaginaryPart,
            this.realPart * complex.imaginaryPart + this.imaginaryPart * complex.realPart
        );
    }

    times(alpha) {
        return new Complex(alpha * this.realPart, alpha * this.imaginaryPart);
    }

    divides(complex) {
        return this.times(complex.reciprocal());
    }

    equals(other) {
        if (!(other instanceof Complex)) return false;
        return (
            Math.abs(this.realPart - other.realPart) < 0.001 &&
            Math.abs(this.imaginaryPart - other.imaginaryPart) < 0.001
        );
    }

    toString() {
        return `${this.realPart} + ${this.imaginaryPart}i`;
    }
}

module.exports = Complex;