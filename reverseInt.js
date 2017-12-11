// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only hold integers within the 32-bit
//  signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
    var reverseInt = 0;
    var neg = false;
    if(x < 0 ){
        neg = true;
        x = x * -1
    }
    while(x > 0){
        reverseInt = reverseInt * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if(reverseInt > 2**31){
        return 0
    }
    if(neg){
        return reverseInt*-1;
    }else {
        return reverseInt
    }
};
