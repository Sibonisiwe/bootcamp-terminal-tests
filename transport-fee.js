module.exports = function(transport){

    switch(transport){
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      case "nightshift":
        return "free";
      default:
        return "pay nothing";
   }
  } 