let assert = require("assert");
let findItemsOver20 = require("../find-items-over20");

describe('The find items over 20 function', function(){
    it('should be able to find items over the quantity 20', function() {
        var itemList = findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]);
        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], itemList)
    });
    it('should be able to find items over the quantity 20', function() {
        var itemList2 = findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'oranges', qty : 37},
            {name : 'mangos', qty : 27},
            {name : 'apples', qty : 3},
            {name : 'kiwi', qty : 32},

        ]);
            assert.deepEqual([{name : 'oranges', qty : 37}, {name : 'mangos', qty : 27}, {name : 'kiwi', qty : 32}], itemList2)
    });
});