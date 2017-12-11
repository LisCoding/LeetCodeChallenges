//
// MERGE SORTED ARRAY
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized
// in nums1 and nums2 are m and n respectively.
function mergeSortedArray(arr1, arr2) {
  if(arr1.length == 0 && arr2.length == 0){
    return arr1;
  }
  var x = arr1.length-1
  arr1.length += arr2.length
  var value = arr2[0];
  while(value){
    for(var i = x; i >= 0; i--){
      if(value > arr1[i]){
        arr1[i+1] = value;
        break;
      }else {
        arr1[i+1]= arr1[1]
      }
    }
    arr2.shift()
  }
  return arr1
}

var a1 = [1,3,4];
var a2 = [7,2,5];
mergeSortedArray(a1, a2)
console.log(a1);
