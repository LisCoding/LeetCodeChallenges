var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)){
        return false;
    }
    var reverse = 0 ;
    var original = x
    while(x > 0){
        reverse = reverse * 10 + x % 10;
        console.log(reverse);
        x = Math.floor(x / 10)
    }
    return reverse == original

};

console.log(isPalindrome(11));
