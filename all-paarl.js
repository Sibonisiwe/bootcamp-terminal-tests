module.exports = function(regNumbers){
    var registration = regNumbers.split(',');
    var fromPaarl = [];
     
    for(var i=0;i<registration.length;i++){
      var reg = registration[i].trim();
    if(reg.startsWith("CJ")){
    fromPaarl.push(reg);
    }
  } 
    return  fromPaarl;
}

// module.exports = function(regNumbers) {
//     var fromPaarl = [];
//     for(var i=0;i<regNumbers.length;i++){
//         var reg = regNumbers[i].trim();
//       if(reg.startsWith("CJ")){
//       fromPaarl.push(reg);
//       }
//     } 
//       return  fromPaarl;
//   }
    
