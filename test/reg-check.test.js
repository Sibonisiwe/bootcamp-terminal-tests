let assert = require("assert");
let regCheck = require("../reg-check");

describe('The regCheck function', function() {
    it('should return true for reg numbers that end with GP', function() {
        var gautengReg = '12345 GP';
        assert.equal(true, regCheck(gautengReg, 'GP'));
    });

    it('should return false for ND', function() {
        var durbanReg = 'ND 12345';
        assert.equal(false, regCheck(durbanReg, 'ND')); 

});
});