
//Plus one
// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the number 0 itself.
//
// The digits are stored such that the most significant digit is at the head of the list.

function plusOne(arr) {
  if(arr.length == 0){
    return [1];
  }
  var len = arr.length-1
  if(arr[len] < 9){
    arr[len]+= 1;
    return arr;
  }
  for (var i = len; i >= 0; i--) {
    if(i == 0 && arr[i] == 9){
      arr[i] = 0
      arr.unshift(1)
      return arr;
    }else if(arr[i]== 9){
      arr[i] = 0
    }else {
      arr[i]+= 1;
      return arr;
    }
  }
}

console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 5, 9]));
console.log(plusOne([1,9]));
