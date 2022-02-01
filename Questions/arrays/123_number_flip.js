function flip(n) {
    //convert to string
	n = n + '';
    // turn string into array and reverse the array
	arr = n.split('').reverse()
    // console.log(arr)
    arr.forEach(num => {
        if(num === '1') num = '3'
    });
    // convert arr of string nums into single str; convert str into a num; return new num
   return parseInt(arr.join(''))
}

/* 
  time complexity O(n) : 
  space complexity O(n) : 
*/

console.log(flip(123))