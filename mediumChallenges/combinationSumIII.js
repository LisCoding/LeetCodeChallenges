// 216. Combination Sum III
// Find all possible combinations of k numbers that add up to a number n, given that only numbers
// from 1 to 9 can be used and each combination should be a unique set of numbers.
// Example 1:
//
// Input: k = 3, n = 7
// Output:
//
// [[1,2,4]]
//
// Example 2:
// Input: k = 3, n = 9
// Output:
// [[1,2,6], [1,3,5], [2,3,4]]
// steps
// 1. if k > n return []
// 2. declare a count, result
// 3. loop until I found all the sets i < n - k
//     create  all posible combination

function combinationSumIII(k, n, start = 1, result = [], combo = []) {
  if(combo.length > k){
    return result;
  }
  if(combo.length == k && n == 0 ){
    result.push(combo);
    console.log(result);
    return result;
  }
  for (var i = start; i <= n && i<= 9; i++) {
      combo.push(i);
      combinationSumIII(k, n-i, i+1, result, combo);
      combo.pop();
  }
  return result
}

console.log(combinationSumIII(3, 9));
