const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function () {

    it(`Sum Checking`, function () {
        const res = calculateNumber("SUM", 2, 2);
        assert.strictEqual(res, 4);
    });
    it('Sum Checking (2)', () => {
        assert.strictEqual(calculateNumber('SUM', -2.6, -1.8), -5);
    });

    it(`Subtract Checking`, function () {
        const res = calculateNumber("SUBTRACT", 3.8, 1.9);
        assert.strictEqual(res, 2);
    });
    it(`subtract checking (2)`, function () {
        const res = calculateNumber("SUBTRACT", 10.3, 7.1);
        assert.strictEqual(res, 3);
    });
    it(`Divide Checking `, function () {
        const res = calculateNumber("DIVIDE", 9.4, 3.2);
        assert.strictEqual(res, 3);
    });
    it(`Divide Checking -ve`, function () {
        const res = calculateNumber("DIVIDE", -4.3, -1.8);
        assert.strictEqual(res, 2);
    });
    it(`Divide zero checking`, function () {
        const res = calculateNumber("DIVIDE", 6, 0);
        assert.strictEqual(res, "Error");
    });
});
