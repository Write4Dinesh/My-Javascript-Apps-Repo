function add(num1, num2){
   var sum =  parseInt(num1) + parseInt(num2);
    window.alert("sum=" + sum);
};
function sub(num1, num2){
    var sum =  parseInt(num1) - parseInt(num2);
     window.alert("sum=" + sum);
 };
 function multiply(num1, num2){
    var sum =  parseInt(num1) * parseInt(num2);
     window.alert("sum=" + sum);
 };
 function devide(num1, num2){
     if(parseInt(num2)>0){
    var sum =  parseInt(num1) / parseInt(num2);
     window.alert("sum=" + sum);
     }else {
        window.alert("Error:number divide by Zero!!");
     }
 }; 