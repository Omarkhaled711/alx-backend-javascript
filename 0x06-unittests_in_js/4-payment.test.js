const assert = require("assert");
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");
const Utils = require("./utils");


describe("sendPaymentRequestToApi", function () {
    it("Validating that utils.calculateNumber is stubbed", function () {
        const check_spy = sinon.spy(console, "log");
        const check_stub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
    
        assert(check_spy.withArgs("The total is: 10").calledOnce);
        assert(check_stub.withArgs("SUM", 100, 20).calledOnce);
    });
});