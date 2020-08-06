let assert = require("assert");
let isFromBellville = require("../is-from-bellville");

describe('The isFromBellville function', function() {
    it('should return true for registration number CY 12345', function() {
assert.equal(true, isFromBellville("CY 12345"));
    });

    it('should return false for registration number CJ 12345', function() {
assert.equal(false, isFromBellville("CJ 12345"));

    });
});