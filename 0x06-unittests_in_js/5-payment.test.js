const assert = require("assert");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");


describe("sendPaymentRequestToApi", function () {
    beforeEach(() => {
        sinon.spy(console, "log");
    });
    afterEach(() => {
        console.log.restore();
    });
    it("validate that console.log was called correctly", () => {
        sendPaymentRequestToApi(100, 20);

        assert(console.log.withArgs("The total is: 120").calledOnce);
    });
    it("validate that console.log was called correctly", () => {
        sendPaymentRequestToApi(10, 10);

        assert(console.log.withArgs("The total is: 20").calledOnce);
    });
});