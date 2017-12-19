// Given an array of non-negative integers, you are initially positioned at the first index of
// the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.
//
// For example:
// A = [2,3,1,1,4], return true.
//
// A = [3,2,1,0,4], return false.
function jumpGame(arr) {
  if(arr.length == 1){
    return true;
  }
  for (var i = 0; i < arr.length-2; i++) {
    if(arr[i] >= arr.length-1 - i){
      return true;
    }
  }
  return false;

}
 a = [2,3,1,1,4]
 b = [2,1,1,0,4]

jumpGame(a)
jumpGame(b)
