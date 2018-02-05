// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines
// are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
//  forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

//BruteForce solution
function waterContainer(height) {
  var maxArea= 0;
  var area = 0
  for (var i = 0; i < height.length; i++) {
    for (var j = i + 1; j < height.length; j++) {
      area = Math.min(height[i], height[j]) * (j-1)
      maxArea = Math.max(maxArea, area)
    }

  }
  return maxArea;
}
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(waterContainer(height))
// Sudo:
// 1.initialize two pointers left and right
// 2. initialize maxArea variable
// 3. iterate through the array
//   1. find the area
//   2. campare the max area
//   3. if left < right
//       move to the left
//      else move to the right
// 4 return maxArea

function waterContainerII(height) {
  var left = 0;
  var right = height.length-1;
  var maxArea = 0;
  var area = 0;
  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left)
    maxArea = Math.max(maxArea, area)
    if(height[left] < height[right]){
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
console.log(waterContainerII(height));
