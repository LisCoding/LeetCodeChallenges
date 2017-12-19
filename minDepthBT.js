// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var minDepth = function(root) {
  if(!root){
    return 0;
  }
  if(!root.left && !root.right){
    return 1;
  }
  var hleft = minDepth(root.left) + 1
  var hright = minDepth(root.right) + 1
  if(hright == 1){
    return hleft;
  }
  if(hleft == 1){
    return hright;
  }
  if( hleft < hright){
    return hleft;
  }
  return hright;
};

var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(6)
var p =  new TreeNode(2)
q.left.left = p

console.log("my Tree", q);
console.log(minDepth());

//Second Approach

// var minDepth = function(root) {
//     if(root == null){
//         return 0;
//     }
//     if(root.right == null && root.left == null){
//         return 1;
//     }
//     var left = -1;
//     var right = -1;
//     if(root.left!=null){
//         left = minDepth(root.left);
//     }
//     if(root.right!=null){
//         right = minDepth(root.right);
//     }
//     if(left == -1 && right != -1){
//         return right+1;
//     }
//     if(right == -1 && left != -1){
//         return left + 1;
//     }
//     return Math.min(left,right)+1;
// };
