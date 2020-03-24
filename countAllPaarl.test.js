describe("countAllPaarl", function(reg) {
  
    it("should count amount of reg numbers from Paarl (3)", function() {
        
        var reg = "CJ 1369, CJ 2468, CJ 2345";
      assert.equal(3, countAllPaarl(reg));
    });

    it("should count amount of reg numbers from Paarl (2)", function() {

        var reg = "CJ 1369, CJ 2468, MP 2345";
      assert.equal(2, countAllPaarl(reg));
    });

    it("should count amount of reg numbers from Paarl (1)", function() {

        var reg = "CJ 1369, MP 2468, MP 2345";
      assert.equal(1, countAllPaarl(reg));
    });
  });
