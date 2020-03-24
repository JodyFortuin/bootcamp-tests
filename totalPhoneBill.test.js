describe("totalPhoneBill", function(bill) {
  
    it("should calculate total phone bill (R6.15)", function() {
        var call = 2.75;
        var sms = 0.65;
        var bill = "call, sms, call";
      assert.equal("R"+6.15, totalPhoneBill(bill));
    });

    it("should calculate total phone bill (R6.15)", function() {
        var bill = "call, call, sms";
      assert.equal("R"+6.15, totalPhoneBill(bill));
    });

    it("should calculate total phone bill (R4.05)", function() {
        var bill = "sms, sms, call";
      assert.equal("R"+4.05, totalPhoneBill(bill));
    });

});