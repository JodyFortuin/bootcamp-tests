function countAllPaarl(reg){
  console.log(reg)
  var regNumbers = reg.split(', ');
  var count = 0;
  for(var i=0; i < regNumbers.length; i++){
    if (regNumbers[i].startsWith('CJ')){
        count++;
  } 
}
  return count;
}