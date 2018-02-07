// Reverse a singly linked list.
//
// click to show more hints.
//
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseLinkList(head) {
  if(!head.next){
    return head;
  }
  var prev = null
  var curr = head
  while(curr){
    var nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
var SSL = new ListNode(1)
SSL.next = new ListNode(2)
SSL.next.next= new ListNode(3)
SSL.next.next.next= new ListNode(4)

console.log(reverseLinkList(SSL))
