// Given an arbitrary ransom note string and another string containing letters from all the magazines,
//  write a function that will return true if the ransom note can be constructed from the magazines ;
//   otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
//steps
// 1. string2 is empty return false
// 2. if string 2 < string 1 return false;
// 3. hashletter of my megazines letters
// iterate trough my random node decrease the count of hash if
//   value < 0 returnfalse or I don't key with el return false
// 4. return true

function ransomNote(r, m) {
  if(m.length == 0 && r.length == 0){
    return true;
  }
  if(m.length == 0 || m.length < r.length) {
    return false;
  }
  var hashletter = {}
  for (var i = 0; i < m.length; i++) {
    var k = m[i];
    if(!hashletter[k]){
      hashletter[k] = 1;
    } else {
      hashletter[k]++;
    }
  }
  for (var j = 0; j < r.length; j++) {
    if(!hashletter[r[j]]){
      return false;
    }else {
      hashletter[r[j]]--;
      if(hashletter[r[j]] < 0){
        return false;
      }
    }
  }

  return true
}

var a = "hey"
var b = "ehy"
console.log(ransomNote(a, b));
