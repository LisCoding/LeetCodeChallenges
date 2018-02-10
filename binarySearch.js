// implement a binary search algorithm
//return if the targer exist in the arr

function binarySearch(arr, t) {
  var left =0;
  var right = arr.length-1
  while(left <= right){

    const mid = left + Math.floor((right-left) / 2);
    if(arr[mid] === t){
      return true;
    } else if(arr[mid]< t){
      left= mid+1;
    } else {
      right = mid -1;
    }

  }
  return -1

}
var a = [1,4,5,7,8,9]
var t = 9
console.log(binarySearch(a, t));
