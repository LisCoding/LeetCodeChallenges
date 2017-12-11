//Add Binary
// Given two binary strings, return their sum (also a binary string).
//
// For example,
// a = "11"
// b = "1"
// Return "100".
// 1 + 2 = 3
// 1 = 1
// 4
// 100

var addBinary = function(a, b) {

  var sum =  convertToDecimal(a) + convertToDecimal(b)
  if(sum == 0 || sum == 1){
      return sum.toString()
  }
  var result = ""
  x = 0
  while(sum != 0){
  	 console.log(sum)
    var i = Math.pow(2, x)
    console.log(i)
    if(i == sum){
      result = "1" + result;
      console.log(i)
      sum = sum - i
      console.log("this is sum ", sum)
      x = 0
    } else if(i > sum){
    	result = "1" + result;
    	sum = sum - Math.pow(2, x-1)
    	x = 0
    }
    else{
      result = "0" + result
      x++
    }
  }
  return result

};
function convertToDecimal(str) {
    if(str.length==1){
        return Number(str)
    }
  var num = 0;
  var x = 0
  for(var i = str.length -1; i >= 0 ; i--){
    if(str[i] == "1"){
      num += Math.pow(2, x)
    }
    x++;

  }
  return num
}
var c = "1010"
var d = "1011"

console.log(addBinary(c, d))
