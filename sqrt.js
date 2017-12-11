// Implement int sqrt(int x).
// Compute and return the square root of x.
// x is guaranteed to be a non-negative integer.


var mySqrt = function(num) {
if (num < 2){
    return num
  }
  var start = 0;
  var end  = num
  while(start + 1 < end){
    var midPoint= start + Math.ceil((end - start)/2)
    var value = midPoint * midPoint
    if(value == num){
      return midPoint
    }else if(value < num){
      start = midPoint
    }else {
      end = midPoint
    }
  }
  if(end * end  ==num){
    return end;
  }
  return start

};


// console.log(sqrt(4)); // 2
console.log(sqrt(4));//1
console.log(sqrt(10)); //2
console.log(sqrt(2));//2



// function sqrt(num) {
//   if (num < 2){
//     return num
//   }
//   var originalNum = num
//   var i = 2;
//   while(true){
//     num = Math.ceil(num/i)
//     console.log("first num:", num);
//     var root = num * num
//     console.log("this is root", root)
//     if(root < originalNum || root == originalNum ){
//       return num
//     }
//     i++;
//   }
// }
