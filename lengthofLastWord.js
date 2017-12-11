
// Add to List
// 58. Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.
var lengthOfLastWord = function(s) {
    if(s.length === 0 || s === " "){
        return 0;
    }
    if  (s[s.length-1] == " " || s.length == 1 ){
         return 1
     }

    var length = 0;
    var i = s.length-1
    while(true){
        if(s[i] != " "){
            length++;
            i--;
        }else if(s[i] == " " && s[i-1] = " "){
          length = 1
          i--;
        }
    }
    return length;

};
