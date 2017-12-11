// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have
// the same value.

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

function sameTree(q,p) {
  console.log(q, p);
  if(!p && !q){
      return true;
  }
  if(!q || !p){
    return false;
  }
  if(p.val == q.val && sameTree(q.left, p.left) && sameTree(q.right, p.right)){
    return true
  } else {
    return false;
  }
}

//Test Cases
var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(7)
var p = new TreeNode(5)
p.left = new TreeNode(6)
p.right = new TreeNode(7)
// p.right.left = new TreeNode(8)
// p.right.left.right = new TreeNode(9)
// console.log("p is:", p);
// console.log("q is:", q);
console.log(sameTree(q, p));

//Solution TWO
var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    }

    if (p == null || q == null) {
        return false;
    }

    var leftSame = isSameTree(p.left, q.left);
    var rightSame = isSameTree(p.right, q.right);

    if (!leftSame || !rightSame) {
        return false;
    }

    return p.val == q.val;
};
