// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
// the two subtrees of every node never differ by more than 1.
// Example:
// Given the sorted array: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5


 // * Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(arr, start=0, end=arr.length) {
  if(arr.length == 0 ){
    return null;
  }
  var myTree;
  if(arr.length == 1){
    myTree = new TreeNode(arr[0]);
    return myTree;
  }
  if(start > end){
    return null;
  }
  var mid = Math.floor(start + (end - start)/ 2)
    myTree = new TreeNode(arr[mid])
    myTree.left = sortedArrayToBST(arr, start, mid)
    myTree.right = sortedArrayToBST(arr, mid, end)
    return myTree;
};

console.log(sortedArrayToBST([-3,-5,0,5,9]));


//Second Approach
// var sortedArrayToBST = function(nums) {
//     if (nums.length === 0) {
//         return null;
//     }
//
//     let root = helper(nums, 0, nums.length - 1);
//
//     return root;
//
// };
//
// const helper = (nums, l, r) => {
//     if (l  > r) {
//         return null;
//     }
//
//     let middle = Math.floor((l + r) / 2);
//     let node = new TreeNode(nums[middle]);
//
//     node.left = helper(nums, l, middle - 1);
//     node.right = helper(nums, middle + 1, r);
//     return node;
//
//
// }
