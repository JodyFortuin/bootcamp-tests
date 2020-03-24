
function findItemsOver(list, threshold){
    var newList = [];
    for (var i = 0; i< list.length; i++){
      var shoppingItems = list[i].qty
      var item = shoppingItems.item
     
      if (shoppingItems > threshold){
       newList.push(list[i])}
    }   return newList
  }