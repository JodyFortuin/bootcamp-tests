describe("findItemsOver20", function(list) {
  
    it("should find items with a quantity over 20", function() {
        var list = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
      assert.deepEqual( [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], findItemsOver20(list));
    });

    it("should find pear quantity which is over 20", function() {
        var list = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 16},
            {name : 'apples', qty : 3},
        ];
      assert.deepEqual( [{name : 'pears', qty : 37}], findItemsOver20(list));
    });

    it("should find no quantity over 20", function() {
        var list = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 17},
            {name : 'apples', qty : 3},
            {name : 'bananas', qty : 3},
        ];
      assert.deepEqual([], findItemsOver20(list));
    });
});