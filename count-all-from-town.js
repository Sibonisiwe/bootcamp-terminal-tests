module.exports = function(regNumbers, locIndicator){
    
     var reg = regNumbers.split(",");
     var fromTown = [];
     for(var i=0;i<reg.length;i++){
       var trimReg = reg[i].trim();
       if(trimReg.startsWith(locIndicator)){
         fromTown.push(trimReg);
       }
    } 
     return fromTown.length;
   }