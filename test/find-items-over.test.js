let assert = require("assert");
let findItemsOver = require("../find-items-over");

describe('The find items over function', function() {
    it('should be able to return qty of over 20', function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
            
        ];
        var threshold = 20
        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], findItemsOver(itemList, threshold))
    });
    it('should be able to return qty of over 20', function() {
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
            {name : 'apples', qty : 23},
            
        ];
        var threshold = 20
           
            assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27},  {name : 'apples', qty : 23}], findItemsOver(itemList2, threshold))
    });
});