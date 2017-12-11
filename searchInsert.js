// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
function searchInsert(arr, t) {
  var len = arr.length-1;
  if (arr[len] === 0) return 0;
  if (arr[len] === t) return len
  if(arr[len]!= t && arr[len]< t){
    return len + 1;
  }
  var x = 0;
  while(true){
    if(arr[x]== t){
      return x;
    } else if(arr[x]> t){
      return x
    }
    x++;
  }
}
var a = [1,3,5,6]
var t = 0

console.log(searchInsert(a, t))

//second solution:
var searchInsert = function(nums, target) {
    var l = 0;
    var u = nums.length-1;
    var mid;

    while(l <= u) {
        mid = parseInt((u+l)/2);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
          u = mid-1;
        } else {
          l = mid+1;
        }
    }

    return l;
};
