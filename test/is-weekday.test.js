let assert = require("assert");
let isWeeekday = require("../is-weekday");

describe('The is weekday function', function() {
    it('should return true for weekdays', function() {
        var weekday = isWeeekday ('monday');
        assert.equal(true, weekday)
    });
    it('should return false if not a weekdays', function() {
        var notWeekday = isWeeekday('Sunday');
        assert.equal(false, notWeekday);
});
});