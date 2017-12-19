// Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node
// never differ by more than 1.
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
function balancedTree(root) {
  if(height(root) > -1 ) {
    return true
  }
  return false;
}

function height(root) {
  if(!root){
    return 0
  }
  var leftTreeHeight = height(root.left)
  var rightTreeHeight = height(root.right)
  if(leftTreeHeight == -1 || rightTreeHeight == -1){
    return -1;
  }
  if(Math.abs(leftTreeHeight - rightTreeHeight ) > 1){
    return -1
  }
  if(leftTreeHeight > rightTreeHeight) return leftTreeHeight + 1
  return rightTreeHeight + 1;
}



// var isBalanced = function(root) {
//     if(!root || (!root.left && !root.right)) { return true; }
//     console.log(height(root))
//      return height(root) < 2
//
// }
//
// function height(root) {
//   if(!root){
//     return 0
//   }
//   if(!root.left && !root.right){
//     return 1;
//   }
//   var leftTreeHeight = height(root.left) + 1
//   var rightTreeHeight = height(root.right)  + 1
//   return leftTreeHeight - rightTreeHeight
//
//
// };
