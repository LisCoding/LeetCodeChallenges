// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.
//
// For example, given
// s = "leetcode",
// dict = ["leet", "code"].
//
// Return true because "leetcode" can be segmented as "leet code".

function breakWord(str, arr) {
  if(arr.length == 0){
    return false;
  }
  for (var x = 0; x < arr.length; x++) {
    word = ""
    for (var i = 0; i < str.length; i++) {
      if(arr[x][0] === str[i]){
        l = arr[x].length;
        for (var j = i; j < l; j++) {
          word+=str[j]
        }
        console.log(word);
        if(word === arr[i]){
          return true
        }
      }
    }
  }
  return false;

}
var  dict = ["leet", "code"]
console.log(breakWord("liseth", dict ));
