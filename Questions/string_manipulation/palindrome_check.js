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
  
  // just checking is regular palindrome
  function isValidYet(s) {
    for(let i = 0; i < s.length / 2; i++) {
      if(s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
}