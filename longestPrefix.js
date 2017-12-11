// Write a function to find the longest common prefix string amongst an array of strings.
var a = ["aabb", "aaabc", "aaa"]
var longestCommonPrefix = function(strs) {
  if(strs.length==0 || strs[0].length == 0){
    return "";
  }
  var prex = "";
  var temp = strs[0][0] //a
  var x = 0;
  var length = strs[x].length
  while(x < length){
    for (var i = 1; i < strs.length; i++) {
      if(strs[i][x] != temp) {
        return prex;
      }
    }
    prex += temp;
    if(strs[0][x+1]){
      temp = strs[0][x+1]
    }
    x++;
  }
  return prex;
};
b =["abca","abc"]
console.log(longestCommonPrefix(b));
