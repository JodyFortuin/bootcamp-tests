describe("isWeekday", function(parameter) {
  
    it("should return true for Monday", function() {
        var parameter = 'Monday';
      assert.equal(true, isWeekday(parameter));
    });

    it("should return false for Sunday", function() {
        var parameter = 'Sunday';
      assert.equal(false, isWeekday(parameter));
    });
    
    it("should return false for Saturday", function() {
      var parameter = 'Saturday';
    assert.equal(false, isWeekday(parameter));
  });

});

