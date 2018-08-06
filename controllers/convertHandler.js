/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let match = /[^0-9./]/.exec(input);
    if (match) {
      let response = input.substring(0, match.index);
      if (response.length < 1){
        return 1;
      } else {
        response = response.split("/");
        if (response.length > 2){
          return "invalid number";
        } else if (response.length > 1){
          return +response[0] / +response[1];
        } else {
          return +response[0];
        }
      }
    }
    return "invalid number";
  }
  
  this.getUnit = function(input) {
        let match = /[^0-9./]/.exec(input);
    if (match) {
      let unit = input.substring(match.index).toLowerCase();
      if (["kg","lbs","mi","km","l","gal"].includes(unit)){
        return unit;
      }
    }
    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case "gal":
        return "l";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "L":
        return "gal";
        break;
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      case "km":
        return "mi";
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "km":
        return "kilometers";
      case "l":
        return "litres";
        break;
      case "L":
        return "litres";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let num = 0;
    switch(initUnit){
      case "gal":
        num = initNum * galToL;
        break;
      case "lbs":
        num = initNum * lbsToKg;
        break;
      case "mi":
        num = initNum * miToKm;
        break;
      case "l":
        num = initNum / galToL;
        break;
      case "L":
        num = initNum / galToL;
        break;
      case "kg":
        num = initNum / lbsToKg;
        break;
      case "km":
        num = initNum / miToKm;
        break;
    }
    return num;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);    
    return result;
  };
  
}

module.exports = ConvertHandler;
