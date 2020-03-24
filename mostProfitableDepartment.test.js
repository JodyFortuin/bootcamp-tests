describe("mostProfitableDepartment", function(list) {
  
    it("should find the most profitable department (outdoor)", function() {
       var list = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}];
assert.deepEqual('outdoor', mostProfitableDepartment(list));

  });

  it("should find the most profitable department (games)", function() {
    var list = [
 {department: 'hardware', sales: 4500, day: 'Monday'},
 {department: 'games', sales: 1500, day: 'Monday'},
 {department: 'carpentry', sales: 5500, day: 'Monday'},
 {department: 'hardware', sales: 7500, day: 'Tuesday'},
 {department: 'games', sales: 2505, day: 'Tuesday'},
 {department: 'carpentry', sales: 1540, day: 'Tuesday'},
 {department: 'hardware', sales: 1500, day: 'Wednesday'},
 {department: 'games', sales: 8507, day: 'Wednesday'},
 {department: 'carpentry', sales: 8009, day: 'Wednesday'},
 {department: 'hardware', sales: 12000, day: 'Thursday'},
 {department: 'games', sales: 18007, day: 'Thursday'},
 {department: 'carpentry', sales: 6109, day: 'Thursday'},
 {department: 'hardware', sales: 7005, day: 'Friday'},
 {department: 'games', sales: 12006, day: 'Friday'},
 {department: 'carpentry', sales: 16109, day: 'Friday'}];
assert.deepEqual('games', mostProfitableDepartment(list));

});

it("should find the most profitable department (decorations)", function() {
    var list = [
 {department: 'hardware', sales: 4500, day: 'Monday'},
 {department: 'decorations', sales: 1500, day: 'Monday'},
 {department: 'carpentry', sales: 5500, day: 'Monday'},
 {department: 'hardware', sales: 7500, day: 'Tuesday'},
 {department: 'decorations', sales: 2505, day: 'Tuesday'},
 {department: 'carpentry', sales: 1540, day: 'Tuesday'},
 {department: 'hardware', sales: 1500, day: 'Wednesday'},
 {department: 'decorations', sales: 8507, day: 'Wednesday'},
 {department: 'carpentry', sales: 8009, day: 'Wednesday'},
 {department: 'hardware', sales: 12000, day: 'Thursday'},
 {department: 'decorations', sales: 18007, day: 'Thursday'},
 {department: 'carpentry', sales: 6109, day: 'Thursday'},
 {department: 'hardware', sales: 7005, day: 'Friday'},
 {department: 'decorations', sales: 12006, day: 'Friday'},
 {department: 'carpentry', sales: 16109, day: 'Friday'}];
assert.deepEqual('decorations', mostProfitableDepartment(list));

});

});