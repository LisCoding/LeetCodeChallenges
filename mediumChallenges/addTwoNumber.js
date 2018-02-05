// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2){
      return null;
    }
    if(!l1 && l2){
      return l2;
    }
    if(!l2 && l1){
      return l1;
    }
    var result = new ListNode(0);
    var sumNode = result
    var reminder = 0;
    var sum = 0
    var runner1 = l1
    var runner2 = l2
    while(runner1 || runner2){
      if(runner1 && runner2){
        sum = runner1.val + runner2.val + reminder
        if(sum > 9){
          reminder = Math.floor(sum/10)
          sum = sum % 10
        } else {
          reminder = 0;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
      }
      else if(!runner1){
        sum = runner2.val
        runner2 = runner2.next;
      } else {
        sum = runner1.val
        runner1 = runner1.next;
      }
      var node = new ListNode(sum)
      result.next = node;
      result = result.next
      sum = 0

    }
    return sumNode.next;
};

var sll1 = new ListNode(2)
var sll2 = new ListNode(4)
// var sll3 = new ListNode(3)
sll1.next = sll2;
// sll2.next = sll3;
var sll4 = new ListNode(5)
var sll5 = new ListNode(6)
var sll6 = new ListNode(4)
sll4.next = sll5;
sll5.next = sll6;
console.log(addTwoNumbers(sll1, sll4));

var addTwoNumbers = function(l1, l2) {
    var resudial = 0;
    var runner1 = l1
    var runner2 = l2
    var result = new ListNode(0);
    var runner3 = result
    while(runner1 || runner2){
    	var value;
    	switch(true){
    		case !runner2:
    				value = runner1.val + resudial;
    				break;

    		case !runner1:
    			 value = runner2.val + resudial;
    			 break;
    		default:
    				 value = runner1.val + runner2.val + resudial; //10
    	}

    		switch(value > 9){
    			case true:
            resudial = 1;
            value = value % 10; //0
    				break;

    			default:
    				resudial = 0
    		}

        runner3.val = value
        switch(true){
        	case !runner2 && runner1:
        		runner1 = runner1.next;
        		break;
        	case !runner1 && runner2:
        		runner2 = runner2.next;
        		break;
        	default:
        		runner2 = runner2.next
        		runner1 = runner1.next
        }


        if(runner1 || runner2){
        	  runner3.next = new ListNode(0)
        	runner3 = runner3.next;
        } else if (!runner2 && !runner1 && resudial== 1){
        	runner3.next = new ListNode(1)
        	return result
        }

        else {
        	return result
        }

    }
};
