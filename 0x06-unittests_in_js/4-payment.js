const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const cost = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${cost}`);
}

module.exports = sendPaymentRequestToApi;
