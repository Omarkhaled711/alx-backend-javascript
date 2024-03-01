const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function () {

    it(`Sum Checking`, function () {
        const res = calculateNumber("SUM", 2, 2);
        expect(res).to.equal(4);
    });
    it('Sum Checking (2)', () => {
        const res = calculateNumber('SUM', -2.6, -1.8);
        expect(res).to.equal(-5);
    });

    it(`Subtract Checking`, function () {
        const res = calculateNumber("SUBTRACT", 3.8, 1.9);
        expect(res).to.equal(2);
    });
    it(`subtract checking (2)`, function () {
        const res = calculateNumber("SUBTRACT", 10.3, 7.1);
        expect(res).to.equal(3);
    });
    it(`Divide Checking `, function () {
        const res = calculateNumber("DIVIDE", 9.4, 3.2);
        expect(res).to.equal(3);
    });
    it(`Divide Checking -ve`, function () {
        const res = calculateNumber("DIVIDE", -4.3, -1.8);
        expect(res).to.equal(2);
    });
    it(`Divide zero checking`, function () {
        const res = calculateNumber("DIVIDE", 6, 0);
        expect(res).to.equal("Error");
    });
});
