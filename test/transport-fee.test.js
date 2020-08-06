let assert = require("assert");
let transportFee = require("../transport-fee");

describe('The transport fee function', function () {
    it('should be able to return R20 for morning shift', function () {
        var shift = transportFee('morning');
        assert.equal('R20', shift);
    });
    it('should be able to return R10 for afternoon shift', function () {
        assert.equal('R10', transportFee('afternoon'))
    });
    it('should be able to return free for night shift', function () {
        assert.equal('free', transportFee('nightshift'));
    });
});