// Find a number that appears more than once

/* 
    while pointer1 < numbers.length
    create pointer1 = 0 
    create pointer2 = pointer1 + 1
    grab num1 using pointer1
    grab num2 using pointer2
    if num1 matches num2 return num 1
    otherwise increment num2 
    if num2 > numbers.length
    increment pointer1
    reset  pointer2 to 0 
*/
  


function findRepeat(numbers) {
    let pointer1 = 0
    let pointer2 = pointer1 + 1
    
    while (pointer1 <= numbers.length - 1){
        let num1 = numbers[pointer1] 
        let num2 = numbers[pointer2]
        // console.log(`num1:${num1} num2:${num2}`)
        
        pointer2++
        if (num1 === num2){
            return num1
        }
            
        if (pointer2 >= numbers.length){
            pointer1++
            pointer2 = pointer1+1
        }
    }
    
    return 0;
}

/* 
    time complexity - O(n)
    space complexity - O(1)
*/