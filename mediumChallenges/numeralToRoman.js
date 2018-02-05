// Given an integer, convert it to a roman numeral.
//
// Input is guaranteed to be within the range from 1 to 3999.
// Sudo:
// 1. create result var
// 2. create a two arrays with roman and decimal numbers
// 3. iterate trough the values
// 4. substract the value and add the roman value to the result


var intToRoman = function(num) {
  if(num < 1 || num > 3999){
    return ""
  }
    var result = "";
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var i = 0;
    while(num > 0){
      while(num >= values[i]){
        num -= values[i];
        result += roman[i]
      }
      i++;
    }
    return result;

}
console.log(intToRoman(13))
