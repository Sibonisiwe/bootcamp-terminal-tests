let assert = require("assert");
let totalPhoneBill = require("../total-phone-bill");

describe('The total phone bill function', function() {
    it('should be able to add 2 calls and 3 SMSs', function() {
        var total = totalPhoneBill('call, sms, sms, call, sms');
        assert.equal('R7.45', total)
    });
    it('should be able to add 2 calls', function() {
        var calls = 'call, call';
        assert.equal('R5.50',totalPhoneBill(calls, 'c'));
    });
    it('should be able to add 3 SMSs', function() {
        var sms = 'sms, sms, sms';
        assert.equal('R1.95', totalPhoneBill(sms, 's'));
    })
});