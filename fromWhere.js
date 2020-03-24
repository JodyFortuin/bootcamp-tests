function fromWhere(reg){
    if (reg.startsWith('CY')){
        return 'Bellville';}
    if (reg.startsWith('CJ')){
        return 'Paarl';}
    if (reg.startsWith('CA')){
        return 'Cape Town';
        } else {
          return 'Some other place!';
        }
}