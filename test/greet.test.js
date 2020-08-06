let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Sibo correctly', function(){
        assert.equal('Hello, Sibo', greet('Sibo'));
    });
    it('should greet Mambo correctly', function(){

        assert.equal('Hello, Mambo', greet('Mambo'));
    });
    it('should greet Wendy correctly', function(){

        assert.equal('Hello, Wendy', greet('Wendy'));
    });
});