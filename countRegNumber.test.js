describe("countRegNumber", function(Reg) {
  
    it("count reg numbers in string (3)", function() {
        var Reg = "CA 182736, CY 523519, CJ 812328";
      assert.equal(3, countRegNumber(Reg));
    });

    it("count reg numbers in string (2)", function() {
      var Reg = "CA 182736, CY 523519";
    assert.equal(2, countRegNumber(Reg));
    });
    
    it("count reg numbers in string (1)", function() {
      var Reg = "CA 182736";
    assert.equal(1, countRegNumber(Reg));
    });
  });
