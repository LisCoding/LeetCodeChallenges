// 637. Average of Levels in Binary Tree
// Given a non-empty binary tree, return the average value of the nodes on each level in the
// form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function avgLevelsBT(root) {
  if(!root.left && !root.right){
    return [root.val];
  }
  var queue = [];
  var result = [];
  queue.push(root);
  while(queue.length !== 0){
    var sum = 0;
    var count = 0;
    var tempQueue = []
    while(queue.length !== 0){
      var node = queue.pop()
      sum += node.val;
      count++;
      if(node.left){
        tempQueue.push(node.left)
      }
      if(node.right){
        tempQueue.push(node.right)
      }
    }
    queue = tempQueue;
    result.push(sum / count)
  }
  return result;
}

var q = new TreeNode(5)
q.left = new TreeNode(6)
q.right = new TreeNode(7)
console.log(q);
console.log(avgLevelsBT(q));


//Second Aproach
// var averageOfLevels = function(root) {
//   if (!root) return [];
//
//   const result = [];
//   let nodes = [root], sum = root.val;
//   while (nodes.length) {
//     result.push(sum / nodes.length);
//
//     const nextNodes = [];
//     sum = 0;
//     for (let node of nodes) {
//       if (node.left) {
//         nextNodes.push(node.left);
//         sum += node.left.val;
//       }
//       if (node.right) {
//         nextNodes.push(node.right);
//         sum += node.right.val;
//       }
//     }
//     nodes = nextNodes;
//   }
//
//   return result;
// };
