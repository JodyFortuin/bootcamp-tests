describe("Greet is working fine", function() {
  
    it("should be able to greet makho", function() {
      assert.equal("Hello, makho", greet("makho"));
    });

    it("should be able to greet Linda", function() {
      assert.equal("Hello, Linda", greet("Linda"));
    });

    it("should be able to greet Linda", function() {
      assert.equal("Hello, Max", greet("Max"));
    });
    
  });