let assert = require("assert");
let fromWhere = require("../from-where");

describe('The from where function', function() {
    it('should be able return bellvile for CY', function() {
        var reg = fromWhere('CY');
        assert.equal('Bellville', reg);

    });
    it('should be able to return paarl for CJ', function() {
        var regTwo = fromWhere('CJ');
        assert.equal('Paarl', regTwo);
    });
    it('should be able to return Cape Town for CA', function() {
        var regThree = fromWhere('CA');
        assert.equal('Cape Town', regThree);
    });
    it('should be able to return a default statement for some other place', function() {
        var statement = fromWhere('ND');
        assert.equal('Some other place!', statement); 
    });
});