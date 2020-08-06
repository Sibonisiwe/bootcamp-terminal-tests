let assert = require("assert");
let allPaarl = require("../all-paarl");

describe('The all Paarl function', function() {
    it('should be able to return two reg numbers from paarl', function() {
const registrations = "CJ 12355, CJ 45666, CY 78977";
assert.deepEqual([ "CJ 12355", "CJ 45666" ], allPaarl(registrations, "CJ"));
    });
    it('should be able to return one reg number from  paarl', function() {
        const registrations2 = "CJ 444, WP 200, ND 124";
        assert.deepEqual(["CJ 444"], allPaarl(registrations2, "CJ"))
    });
});