// Symetric tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

 // * Definition for a binary tree node.
  function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

};
function SymetricTree(myTree) {
  if((!myTree.left || !myTree.right)||(myTree.left.val != myTree.right.val)){
    return false;
  }
  else {
    return isSymetric(myTree.left, myTree.right)
  }
}


function isSymetric(leftNode, rightNode){
  if(!leftNode.left && !leftNode.right && !rightNode.left && !rightNode.right){
    return true;
  }
  if((!leftNode.left && rightNode.right || leftNode.left && !rightNode.right )){
    return false;
  }
  if(leftNode.left.val != rightNode.right.val || leftNode.right.val != rightNode.left.val){
    return false
  }
  leftNode = leftNode.left
  rightNode = rightNode.right
  if(leftNode.left.val == rightNode.right && leftNode.right.val == rightNode.left.val && isSymetric(leftNode, rightNode)){
    return true
  }
}

var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(6)
q.left.left = new TreeNode(2)
q.right.left = new TreeNode(2)
console.log("My tree", q);
console.log(SymetricTree(q));
