// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
//
// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list
// should become 1 -> 2 -> 4 after calling your function.

function ListNode(val) {
  this.val = val;
  this.next = null;

}
//Steps
// 1. replace the node val with the next;
// 2. point the node next to node next next

function deleteNode(node) {
  node.val = node.next.val
  node.next = node.next.next
  return node;
}

var SSL = new ListNode(1)
SSL.next = new ListNode(2)
SSL.next.next= new ListNode(3)
SSL.next.next.next= new ListNode(4)

 console.log(deleteNode(SSL.next.next));
