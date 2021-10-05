
function strictEquals(a,b){
  let result= (Object.is(a, b));
  console.log(result);

  if(isNaN (a)|| isNaN(b)){
   result = false;
  }

}




