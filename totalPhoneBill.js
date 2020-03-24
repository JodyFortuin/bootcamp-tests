function totalPhoneBill(bill){
  var callLog = bill.split(', ')
     var phoneBill = 0;
  for(var i=0; i < callLog.length; i++)
   
    if (callLog[i] === 'call'){
       phoneBill += 2.75;
    } else if (callLog[i] === 'sms'){
    phoneBill += 0.65;
  } return 'R' + phoneBill.toFixed(2);
}

//return 'R' + phoneBill