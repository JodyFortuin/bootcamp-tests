function mostProfitableDepartment(list){
  var mostDep = '';
  var mostsales = 0;
  for (var i = 0 ; i < list.length ; i++){
     var sales = list[i].sales;
     var department = list[i].department
    
    if (sales > mostsales){
     mostsales = sales
     mostDep = department}
  } 
  return mostDep
}

function mostProfitableDay(list){
   var mostDay = ''
   var newList = {}
   for (var i = 0 ; i < list.length; i++){
     var sales = list[i].sales;
     var weekDays = list[i].day
     
           if (newList[weekDays] === undefined) {
        newList[weekDays] = sales
    } else {
    newList[weekDays] += sales;
  }
}

   var mostDay= '';
  var mostSales = 0;
    for(var props in newList ){
    if(newList[props] > mostSales){
    mostDay = props
    mostSales = newList[props]
    }
    }
  return mostDay;
}
