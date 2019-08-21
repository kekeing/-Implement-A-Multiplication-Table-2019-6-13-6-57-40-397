function createMultiplyTable(start, end) {
    if(isValidParam(start,end) !== "Sucess"){
        return isValidParam(start,end);
    }
    else return getMultiplyTable(start,end);
   }
   console.log(createMultiplyTable(2,4));
  // console.log(createMultiplyTable('s',4));
  
  
   function isValidParam(start, end) {
       if(!isNumber(start) || !isNumber(end)){return "请输入数字"; }
       else if(!isInteger(start) || !isInteger(end)){return "请输入整数";}
       else if(isZero(start) || isZero(end)){return "请输入零以外的整数";}
       else if(isNegative(start) || isNegative(end)){return "请输入正整数";}
       else if(start > end){return "stat不能大于end";}
       else return "Sucess";
   }
   
   function getMultiplyTable(start, end) {
       let result='';
       for(let i = start; i <= end;++i){
           for(let j = start;j <= i;j++){
               result += j + '*' + i + '=' + getMultiResult(j,i);
               if(j < i){result += ' ';}

           }
           result += "\r\n";
       }
       return result;
    
   }
   //console.log(getMultiplyTable(2,4));
   
   
   function getMultiResult(param_a, param_b) {
       return param_a * param_b; 
   }
   
   
   
   
   
   function isNumber(num){
       return typeof num == 'number';
   }
   function isInteger(num){
       return num % 1 === 0;
   }
   function isZero(num){
       return num === 0;
   }
   function isNegative(num){
       return num < 0;
   }
   //console.log(isValidParam(2.1,4));



module.exports = createMultiplyTable;