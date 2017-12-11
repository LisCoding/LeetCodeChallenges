//sorted list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function(head) {
  if(!head){
    return head;
  }
  var result = head
  var runner = result
  while(runner.next){
    if(runner.next.val == runner.val){
      runner.next = runner.next.next
    } else {
      runner = runner.next;
    }
  }
  return result;
};

//Test Cases
var l1 = new ListNode(2)
var l2 = new ListNode(3)
var l3 = new ListNode(3)
var l4 = new ListNode(4)
l1.next = l2
l2.next = l3
l3.next = l4
console.log(l1);

console.log(deleteDuplicates(l1));
//Solution Two

var deleteDuplicates = function(head) {
    if (head == null) return head;
    var i = head;

    while(i.next !== null) {
        if (i.next.val == i.val) {
            i.next = i.next.next;
        }
        else {
            i = i.next;
        }
    }

    return head;
};
