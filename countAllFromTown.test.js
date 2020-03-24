describe("countAllFromTown", function(reg, reg2) {
  
    it("should count amount of reg numbers from a Town (1 from MP)", function() {

        var reg = "CJ 1369, CJ 2468, MP 2345";
        var reg2 = "MP";
      assert.equal(1, countAllFromTown(reg, reg2));
    });

    it("should count amount of reg numbers from a Town (2 from CJ)", function() {

        var reg = "CJ 1369, CJ 2468, MP 2345";
        var reg2 = "CJ"
      assert.equal(2, countAllFromTown(reg, reg2));
    });

    it("should count amount of reg numbers from a Town (1 from CY)", function() {
        
        var reg = "CJ 1369, CY 2468, MP 2345";
        var reg2 = "CY"
      assert.equal(1, countAllFromTown(reg, reg2));
    });
  });
