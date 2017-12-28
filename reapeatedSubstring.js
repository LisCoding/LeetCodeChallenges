// 459. Repeated Substring Pattern
// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
// Example 1:
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
//
// Example 2:
// Input: "aba"
// Output: False
//
// Example 3:
// Input: "abcabcabcabc"
// Output: True
//
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
// 1. find mid point
// 2. generate a temp string from 0 to mid
// 3. temp string + temp string == string
//     return true
//    if not return false
function substringPattern(str) {
  console.log(Math.floor(str.length/2))
  if(str.length == 1){
    return false;
  }
  var flag = false
  for (var i = 1; i < str.length; i++) {
    if(str[i] != str[0]){
      flag = false;
      break;
    } else {
      flag = true
    }
  }
  if(flag){
    return true;
  }
  var subs = []
  for (var i = 0; i < Math.floor(str.length/2); i++) {
    subs.push(str[i])
  }
  var  temp = subs.join("") + subs.join("")
  if( temp == str) {
    return true;
  }
  if (str.length % 2 == 1 ){
    temp = subs.join("") + str[0] + subs.join("")
      console.log(temp);
    if(temp == str){

      return true;
    }
  }
  temp = "";
  while(subs.length != 1){
      subs.pop()
     while(temp.length <= str.length){
       temp += subs.join("")
       if (temp == str){
        return true;
       }
     }
  }
    return false;
}
// console.log(substringPattern("aba"));
// console.log(substringPattern("abab"));
console.log(substringPattern("abababaabababaabababa"));
