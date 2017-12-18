// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// * Definition for a binary tree node.
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }


var maxDepth = function(root) {
  if(!root){
    return 0
  }
  if(!root.left && !root.right){
    return 1
  }
  var leftHeight;
  var rightHeight;
  leftHeight = maxDepth(root.left) + 1
  rightHeight = maxDepth(root.right) + 1


  if(leftHeight > rightHeight){
    return  leftHeight;
  } else {
    return rightHeight;
  }

};

var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(6)
var p =  new TreeNode(2)
q.left.left = p

console.log("my Tree", q);
console.log(maxDepth(q));

// Second Version
// var maxDepth = function(root) {
//     if(root == null)
//         {
//             return 0;
//         }
//     else
//         {
//             var leftDepth = maxDepth(root.left);
//             var rightDepth = maxDepth(root.right);
//
//             return leftDepth > rightDepth? (leftDepth+1) : (rightDepth+1);
//         }
// };
