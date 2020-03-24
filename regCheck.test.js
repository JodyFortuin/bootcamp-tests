describe("regCheck", function(reg1, reg2) {
  
    it("should return true for (CY)", function() {
        var reg2 = "CY";
        var reg1 = "DV 23 LP CY";
      assert.equal(true, regCheck(reg1, reg2));
    });

    it("should return false for (ND)", function() {
       var reg2 = "CY";
       var reg1 = "DV 23 LP ND";
      assert.equal(false, regCheck(reg1, reg2));
    });
    
    it("should return false for (MP)", function() {
      var reg2 = "CY";
      var reg1 = "DV 23 LP MP";
     assert.equal(false, regCheck(reg1, reg2));
   });
  });


  