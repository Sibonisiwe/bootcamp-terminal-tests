let assert = require("assert");
let countAllFromTown = require("../count-all-from-town");

describe('The count all from town function', function() {
    it('should be able to return all registarions from Cape Town', function() {
        var regNumbers = 'CY 123, CA 202, CA 400, CJ 300';
        assert.deepEqual(2, countAllFromTown(regNumbers, 'CA'))
    });
    it('should be able to return all registarions from Bellville', function() {
        var regNumbers = 'CY 123, CA 202, CY 400, CJ 300, CY 767';
        assert.deepEqual(3, countAllFromTown(regNumbers, 'CY'))

    });
});