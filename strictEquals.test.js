
function strictEquals(a,b){
  let result= (Object.is(a, b));
  
  if(isNaN(a/b)|| isNaN(b/a)){
   result = true;
    if(isNaN(a)|| isNaN(b)){
   result = false;

  }
}

return result;
}

describe("function strictEquals", function (){
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = 1;
	const b = 1;
	const expected = true; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arange
	const a = NaN;
	const b = NaN;
	const expected = false; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = 0;
	const b = -0;
	const expected = true; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = -0;
	const b = 0;
	const expected = true; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = 1;
	const b = "1";
	const expected = false; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = true;
	const b = false;
	const expected = false; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arange
	const a = false;
	const b = false;
	const expected = true; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
test("When it receives a and b,it should return a === b", function(){
	//Arrange
	const a = "Water";
	const b = "oil";
	const expected = false; 
	
  //Act
	const result= strictEquals(a,b);

	//Assert
  expect(result).toBe(expected);

});
});



