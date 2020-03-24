function findItemsOver20(list){
  var newList = [];
  for (var i = 0; i< list.length; i++){
    var shoppingItems = list[i].qty
    var item = shoppingItems.item
    
   if (shoppingItems > 20){ 
    newList.push(list[i])}
  }  return newList
}
