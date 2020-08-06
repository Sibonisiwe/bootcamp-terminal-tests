module.exports = function(objectName){
    var objectList = []
  
  for(var i=0;i<objectName.length;i++){
    //console.log(objectName[i].qty)
    if (objectName[i].qty > 20) {
		//console.log(objectName[i])
      objectList.push(objectName[i])
    }
  }
 	return objectList;
}