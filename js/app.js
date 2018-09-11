// ==================================functions==================================
// ===============================Named Function===============================
// function addNumbers() {
//   var result = 10+5;
//   console.log(result);
// }
//
// addNumbers();

// ============================ Anonymous Function ============================
//                              Saved as variable
// var addNumbers = function () {
//   var result = 10 + 5;
//   console.log(result);
// }
//
// addNumbers();
//
// setInterval(addNumbers,1000);

//                          saved as property of object
// var obj = new Object();
//
// obj.addNumbers: function () {
//   var result = 10 + 5;
//   console.log(result);
// }
//
// obj.addNumbers();

//                                Arrow functions
// var addNumbers = (num1, num2)=>{
//   return  num1 + num2;
// }
// var result=addNumbers(3,4);
// console.log(result);
// var nestedResult = addNumbers(addNumbers(5,6),result);
// var nestedResult = addNumbers(addNumbers(5,6),addNumbers(addNumbers(5,6),6),6);
// console.log(nestedResult);

// ====================================Scope====================================
// var outsideVariable = 5;
//
// function doSomething(){
//   var insideVariable = 10;
//   console.log(outsideVariable);
// }
//
// doSomething();
// console.log(insideVariable);

function functionOne(sausage){ //4. state the argument to be used within the function
  console.log(sausage); //5. Logout thesecond function
  console.log("this is function one");
}

function functionTwo(sausage){ //2. state the argument to be used within the function
  sausage = "troll"; //2.5 alter the argument if you wish
  functionOne(sausage); //3. pass argument to second function
  console.log("this is function Two");
}

functionTwo('sausage'); //1. define data type

//================================== Nested function ==================================
var str1 = "David";
var str2 = " James";

var joinStrings = (string1, string2) =>{
  var newString = string1 + string2;
  function logString(string){
    console.log(string);
  }
  logString(newString);
  return newString;
}

 var text =joinStrings(str1,str2);
console.log(joinStrings(str1,str2));
console.log(`${text is a trainee}`);
