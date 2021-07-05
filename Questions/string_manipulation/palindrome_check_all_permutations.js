// creates the  permutations
const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
}

// just checking is regular palindrome
  function isValidYet(s) {
    for(let i = 0; i < s.length / 2; i++) {
      if(s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
}


function validPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
  
    while(start < end) {
      if(str[start] !== str[end]) {
        //check both ways, slice here is not so intuitive
        return isValidYet(str.slice(start, end))
          || isValidYet(str.slice(start + 1, end + 1));
      }
  
      start++;
      end--;
    }
  
    return true;
}

function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    let stringArr = []
    let ans = []

    //puts each char in an stringArr
    for (let char of theString) {
        stringArr.push(char)
    }

    // store all permutations
    let permutations = permutator(stringArr)

    //convert each permutation into a string and check if it's a palindrome 
    permutations.forEach(permutation => {
    //    console.log(validPalindrome(permutation.join()))         
        ans.push(validPalindrome(permutation.join()))  
    });
    
    // if one permutation was a palindrome returns true; if no permutation was a palindrome returns false
    const isTrue = (e) => e === true
    return (ans.some(isTrue) ? true : false)
}

console.log(hasPalindromePermutation('livci'))
