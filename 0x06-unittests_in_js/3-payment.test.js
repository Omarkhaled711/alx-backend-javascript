const assert = require("assert");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils");


describe("sendPaymentRequestToApi", function () {
    it("Validating that the sendPaymentRequestToApi uses the calculateNumber method", function () {
        const check = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(50, 24.52);

        assert(check.calledOnce);
        check.restore();
    });
});