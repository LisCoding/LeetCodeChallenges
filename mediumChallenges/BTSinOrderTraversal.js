// Given a binary tree, return the inorder traversal of its nodes' values.
// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].
// Note: Recursive solution is trivial, could you do it iteratively?
// inorder: Left, Root, Right
// sudo:
// 1.traverse the left tree and call inorder(left)
// 2. visit the root
// 3. traverse the right tree an call inOrder(right)
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function inOrderTraversal(node, result =[]) {
  if(node == null){
    return;
  }
  inOrderTraversal(node.left, result)
  result.push(node.val)
  inOrderTraversal(node.right, result)
  return result
}

var myTree = new TreeNode(1);
myTree.right = new TreeNode(2);
myTree.right.left = new TreeNode(3);
// console.log(myTree)

console.log(inOrderTraversal(myTree));


// Iterative aproach
var inorderTraversal = function(root) {
    let result = [];
    let Stack = [];
    let node = root

    while(Stack.length > 0 || node !== null) {
        while(node) {
            Stack.push(node);
            node = node.left
        }

        if (Stack.length !== 0) {
            node = Stack.pop();
            result.push(node.val)
            node = node.right
        }
    }

    return result
};
