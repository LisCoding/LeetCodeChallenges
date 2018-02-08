// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
// steps:
//
// 1. if s.length || t length == 0 return false;
// 2. create hash table with letter as key and count values;
// 3. second iteration subtract check if -1 return false
// 4. iterate and check of values are 0

function isAnagrams(s, t) { //"ab", ba
  if(s.length != t.length){
    return false;
  }

  var letterCount = {}
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    if(!letterCount[s[i]]){
      letterCount[s[i]] = 1
    }else {
      letterCount[s[i]]++;
    }
  }

  for (var j = 0; j < t.length; j++) {
    if(letterCount[t[j]]){
    letterCount[t[j]]--;

  } else if(letterCount[t[j]] == -1 ){
    return false;
  }
     else {
      return false;
    }
  }
  for (var i = 0; i < s.length; i++) {
    if(letterCount[s[i]]!= 0){
      return false
    }
  }
  return true
}

var a = "ab"
var b = "ba"

console.log(isAnagrams(a,b));

//Second Aproach
var isAnagram = function(s, t) {
    var charSheet = Array(26).fill(0)
    if (s.length === t.length) {
        for (var i = 0; i < s.length; i++) {
            charSheet[s.charCodeAt(i) - 97]++
            charSheet[t.charCodeAt(i) - 97]--
        }
        for (i = 0; i < 26; i++) {
            if (charSheet[i] !== 0) {
                return false
            }
        }
        return true
    }
    return false
};
