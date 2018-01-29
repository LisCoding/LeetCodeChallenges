// Group anagrams
// Given an array of strings, group anagrams together.
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
//Steps
// 1. return [[]] if arr empty
// 2. declares results, hashWords temp variables
// 3. iterate true the array and create a hashWords where keys are sorted words and values are anagrams
// 4. iterate second time to push values to result
// 5. return result

function groupAnagrams(arr) {
  if(arr.length == 0){
    return [[]]
  }
  var result = []
  var hashWords= {}
  var temp;
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i]
    var sortedWord = arr[i].split("").sort().join("")
    if(!hashWords[sortedWord]){
      hashWords[sortedWord] = [temp];
    }
    else {
      hashWords[sortedWord].push(temp)
    }
  }
  for (var key in hashWords){
    result.push(hashWords[key])
  }
  return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
