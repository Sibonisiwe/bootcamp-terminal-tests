let assert = require("assert");
let countRegNumber = require("../count-reg-number");

describe('The count reg number function', function() {
    it('should return 3 for reg numbers CY 0987, CA 3456, ND 2680', function() {
        var regCount = countRegNumber('CY 0987, CA 3456, ND 24680');
        assert.equal(3, regCount);
    });
    it('should return 5 for reg numbers CY 0987, CA 3456, ND 2680', function() {
        var regCount = countRegNumber('CY 0987, CA 3456, ND 24680, CL 200, CA 390');
        assert.equal(5, regCount);
    });
});