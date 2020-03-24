describe("yearsAgo", function(year) {
  
    it("should count amount of years (10)", function() {
        var year = 2010;
  
      assert.equal(10, yearsAgo(year));
    });

    it("should count amount of years ago (70)", function() {
      var year = 1950;
      var xYear = 2020;
    assert.equal(70, yearsAgo(year));
  });
    
  it("should count amount of years ago (21)", function() {
    var year = 1999;
    var xYear = 2020;
  assert.equal(21, yearsAgo(year));
});
  });
