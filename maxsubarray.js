
// 53. Maximum Subarray
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.


// max_so = 0
// max_ending = 0
//
// Loop for each element of the array

function maxSubarray(arr) {
  if(arr.length == 0){
    return 0;
  }
  if(arr.length == 1){
    return arr[0];
  }
  var max_ending = arr[0]
  var max_far  = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] > max_ending + arr[i]){
      max_ending = arr[i]
    } else {
      max_ending = max_ending + arr[i]
    }
    if(max_far > max_ending){
      max_far = max_far;
    }else {
      max_far = max_ending
    }
  }
return max_far;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,-7]));
console.log(maxSubarray([-2,-5,-7]));
