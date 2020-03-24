function countAllFromTown(reg, reg2){
  var  fromKuilsriver = reg.split(','); 
  var count = 0;
  for(var i=0; i< fromKuilsriver.length; i++){
    if (fromKuilsriver[i].trim().startsWith(reg2)){
      count++;
    }
  } return count;
}