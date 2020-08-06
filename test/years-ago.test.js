let assert = require("assert");
let yearsAgo = require("../years-ago");

describe('The how many years ago function', function() {
    it('should be able to return years', function() {
        
        assert.equal(20, yearsAgo(2000))
    });
    it('should be able to return years', function() {
        
        assert.equal(30, yearsAgo(1990))
    });
});