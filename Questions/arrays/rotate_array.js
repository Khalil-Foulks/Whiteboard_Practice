let shiftRight = function(arr,n){
    let count = 0
    let idx = arr.length - 1
  
    while(count < n){
        let popped = arr.pop(idx)
        // at 0 idx, replace 0 items, insert popped at 0 idx
        arr.splice(0,0,popped)
        count += 1
    }
}
  
let shiftLeft = function(arr,n){
    let count = 0
    n = Math.abs(n)
  
    while(count < n){
        // remove 1st element and push to the end of arr
        let popped = arr.shift()
        arr.push(popped)
        count += 1
    }
}
  
let rotateArray = function(arr, n) {
    //TODO: Write - Your - Code
    // if n is a positive num shift to the right
    if(n >= 0){
      shiftRight(arr,n)
    }
    // if n is a negative num shift to the left
    else{
      shiftLeft(arr,n)
    }
};
  
let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log("Array Before Rotation");
console.log(arr)

rotateArray(arr, -2);

console.log("Array After Rotation");
console.log(arr)

/* 
    time: O(n)
    space: O(1)
*/
