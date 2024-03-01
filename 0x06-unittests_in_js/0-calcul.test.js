const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function () {

  it(`Whole number checking`, function () {
    const res = calculateNumber(4, 2);
    assert.strictEqual(res, 6);
  });
  it(`float number checking`, function () {
    const res = calculateNumber(1.5, 2.3);
    assert.strictEqual(res, 4);
  });
  it(`float number checking`, function () {
    const res = calculateNumber(1.5, 4.8);
    assert.strictEqual(res, 7);
  });
  it(`negative numbers checking`, function () {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });
  it(`zero checking`, function () {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it(`negative number checking`, function () {
    const res = calculateNumber(-1.7, -1.1);
    assert.strictEqual(res, -3);
  });
});
