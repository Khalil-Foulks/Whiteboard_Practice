// Brute force method

const longest_substring_with_k_distinct = function(str, k) {
    // check if k > len of str; if true return len of str
    let count = str.length
    if(k > count){
      return count
    }
  
    // keep track of count of longest substr
    let max = 0
    // loop once for starting position
    for(let i = 0; i < str.length; i++){
      // keep track of # of unique chars
      let uniqueCharCount = 0
      // store the unique chars
      let uniqueSubstr = {}
      // do inner loop
      for(let j = i; j < str.length; j++){
        let char = str[j]
        // console.log(`count = ${uniqueCharCount}`)
        // console.log(uniqueSubstr)
        // if cur substr count > longest replace longest
        if(uniqueCharCount <= k){
          // check if the cur char is in obj; if false add it
          if (!(char in uniqueSubstr)){
            if(uniqueCharCount < k){
              uniqueSubstr[char] = 0
            }
            // increment unique char count by 1
            uniqueCharCount += 1
          }
          // if cur char is in obj increment by 1
          if(char in uniqueSubstr){
            uniqueSubstr[char] += 1
          }
        }
      }
      // if sum > max replace max
      if(substrCount(uniqueSubstr) > max){
        max = substrCount(uniqueSubstr)
      } 
      // console.log(uniqueSubstr)
      // console.log('---------')
    }
    return max
};
// adds up all chars in uniqueSubstr obj
let substrCount = obj => Object.values(obj).reduce((a, b) => a + b)

/* 
  time complexity O(n^2)
  space complexity O(k) - where k is k distinct chars; at least 1 unique char must be stored in obj
*/