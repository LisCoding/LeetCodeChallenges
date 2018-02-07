// Remove all elements from a linked list of integers that have value val.
//
// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5
//
// Credits:
// Special thanks to @mithmatt for adding this problem and creating all test cases.

// sudo:
// 1. check if there is node if not return node
// 2. create a runner to traverse SLL
// 3. loop through the SSL and compare node.val == val
//     if node.val == val
//       remove node and reassing pointer
//     else keep going

function ListNode(val) {
  this.val = val;
  this.next = null;

}
function removeAllElments(node, val) { //1 2 2 4 ->
  if(!node){
    return node;
  }
  var runner = node;
  while(runner.next){
    if(node.val == val){
      node = node.next
    }
      if(runner.next.val == val) {
        runner.next = runner.next.next
      }else {
        runner = runner.next
      }
    }
    if(!node.next && node.val == val){
      return null
    } else {
      return node;
    }

}
var SSL = new ListNode(2)
SSL.next = new ListNode(2)
SSL.next.next= new ListNode(2)
SSL.next.next.next= new ListNode(2)
console.log(removeAllElments(SSL, 2));
