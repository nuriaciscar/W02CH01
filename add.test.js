
function strictEquals(a,b){
  let result= (Object.is(a, b));
  return result;

}


describe("function strictEquals", function (){
test("When it receives a and b,it should return a === b", function(){
	//Arange
	const a = 1;
	const b = 1;
	const expected = true; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
});


