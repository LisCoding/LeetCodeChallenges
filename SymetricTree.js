// Symetric tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

 // * Definition for a binary tree node.
  function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
  }

// Solving using recursion
var isSymmetric = function(root) {
  return mirrorTrees(root, root)
};

var mirrorTrees = function (tree1, tree2) {
  if(!tree1 && !tree2){
    return true
  }
  if(!tree1 || !tree2){
    return false
  }
  var leftTree = mirrorTrees(tree1.left, tree2.right)
  var rightTree = mirrorTrees(tree1.right, tree2.left)
  if(tree1.val == tree2.val && leftTree && rightTree){
    return true;
  } else {
    return false
  }
}

// Solving using iteration
// 1. use queue dataStructure

var isSymmetric = function(root) {
  var nodeQueue = [];
  //First we add root to our queue
  nodeQueue.push(root)
  nodeQueue.push(root)

  while (nodeQueue.length > 0) {
    var  t1 = nodeQueue.shift();
    var  t2 = nodeQueue.shift();
    if(!t1 && !t2){
      continue;
    }
    if(!t1 || !t2){ return false; }

    if(t1.val != t2.val){ return false; }
    nodeQueue.push(t1.left)
    nodeQueue.push(t1.right)
    nodeQueue.push(t1.right)
    nodeQueue.push(t1.left)
  }
  return true;
};

//Test Cases

var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(6)

var p = new TreeNode(5)
p.left = new TreeNode(7)
p.right = new TreeNode(6)
console.log("My tree", q);
console.log(isSymmetric(q));
// console.log("My tree", p);
// console.log(isSymmetric(p));


//Second Approach
// var isSymmetric = function(root) {
//   return root === null || _isSymmetric(root.left, root.right);
// };
//
// function _isSymmetric (left, right) {
//   if (left === null || right === null) {
//     return left === right;
//   }
//   if (left.val !== right.val) {
//     return false;
//   }
//   return _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left);
// }
