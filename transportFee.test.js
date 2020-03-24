describe("transportFee", function(bill) {
  
  it("should calculate transport fee for morning shift", function() {
      var bill = 'morning';
    assert.equal("R20", transportFee(bill));
  });

  it("should calculate transport fee for afternoon shift", function() {
      var bill = 'afternoon';
    assert.equal("R20", transportFee(bill));
  });

  it("should calculate transport fee for nightshift", function() {
      var bill = 'nightshift';
    assert.equal("free", transportFee(bill));
  });

});