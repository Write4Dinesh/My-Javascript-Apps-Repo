 function Result(opcode,isSuccessful,result,error){
    this.opcode = opcode,
    this.isSuccessful = isSuccessful,
     this.result = result,
     this.error = error,
     this.toString= function(){
          var str = "opcode=" + this.opcode + ",isSuccessful=" + this.isSuccessful + "," + 
          "result=" + this.result + ",error=" + this.error;
            return str;
        }
};

function doMaths(opcode,num1,num2){
    var result = new Result(null,null,null,null); 
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(opcode=="/" && num2<=0){
         result.isSuccessful = false;
         result.error = "Divide by Zero Error";
         return result;
    }
    var value;
  switch(opcode){
      case "+" : value =add(num1,num2);
                  break;
      case "-" : value =sub(num1,num2);
                  break;
     case "*" : value=multiply(num1,num2);
                  break;
     case "/" : value=devide(num1,num2);
                  break;
  } 
  
  result.isSuccessful = true;
  result.opcode = opcode;
  result.result = value;
  return result;
};
function add(num1, num2){
    return num1 + num2;
};
function sub(num1, num2){
    return num1 - num2;
 };
 function multiply(num1, num2){
    return  num1 * num2;
 };
 function devide(num1, num2){
    return num1/num2;
 }; 