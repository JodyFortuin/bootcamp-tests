describe("fromWhere", function(reg) {
  
    it("should return Bellville for CY", function() {
        var reg = "CY 1369";
      assert.equal('Bellville', fromWhere(reg));
    });

    it("should return Paarl for CJ", function() {
        var reg = "CJ 2468";
      assert.equal('Paarl', fromWhere(reg));
    });

    it("should return for Cape Town for CA", function() {
        var reg = "CA 2345";
      assert.equal('Cape Town', fromWhere(reg));
    });
  });
