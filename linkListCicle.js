// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?
// 1-> 2-> 3->5->1
// ab   a   b a
// b

 function ListNode(val) {
  this.val = val;
  this.next = null;
}
var hasCycle = function (head) {
  if(!head || !head.next){
    return false;
  }
  var runner1 = head
  var runner2 = head.next
  while(runner1 != runner2){
    if(runner1 == null  || !runner2 || runner2.next == null ){
      return false;
    }
    runner1 = runner1.next;
    runner2 = runner2.next.next;
  }
  return true
}
var mySL= new ListNode(4)
mySL.next = new ListNode(5)
mySL.next.next = new ListNode(7)
mySL.next.next.next = mySL
console.log(mySL);
console.log(hasCycle(mySL));

//Second Approach
// var hasCycle = function(head) {
//     if(head === null || head.next === null) return false
//     let slow = head,
//         fast = head.next
//
//     while(slow !== fast){
//         if(fast === null || fast.next === null){
//             return false
//         }
//         slow = slow.next
//         fast = fast.next.next
//     }
//
//     return true
// };
