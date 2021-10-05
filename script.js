
function strictEquals(a,b){
  let result= (Object.is(a, b));
  
  if(a/-b || -a/b){
   result = true;
  }
  if(isNaN (a)|| isNaN(b)){
   result = false;
  }

return result;
}




