module.exports = function(items, threshold){
    var itemsOver = []
    
   for(var i=0;i<items.length;i++){
   if (items[i].qty > threshold){
     itemsOver.push(items[i])
   
       }   
     }
    return itemsOver;
  }