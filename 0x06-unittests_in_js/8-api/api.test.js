const request = require('request');
const assert = require("assert");

describe('integration test', () => {
  const testing_url = 'http://localhost:7865';

  it('Get root page', (done) => {
    request.get(`${testing_url}/`, (err, res, body) => {
      assert(res.statusCode, 200);
      assert(body, "Welcome to the payment system");
      done();
    });
  });
});
