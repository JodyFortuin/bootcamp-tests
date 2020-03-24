describe("isFromBellville", function() {
  
    it("should return true for CY", function() {
      assert.equal(true, isFromBellville("CY"));
    });

    it("should return false for CJ", function() {
      assert.equal(false, isFromBellville("CJ"));
    });
    
    it("should return false for MP", function() {
      assert.equal(false, isFromBellville("MP"));
    });
  });