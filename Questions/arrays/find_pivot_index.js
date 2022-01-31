pivotIndex = (nums) => {
    // holds the running totals for left and right
    let left = 0, right = 0

    // creates a grand total for a nums in arr
    for(let i = 0; i < nums.length; i++){
        right += nums[i]
    }

    
    // console.log(`lTotal:${left} rTotal:${right}`) 
    
    for (let i = 0; i < nums.length; i++) {
        // console.log(`mid:${i}`)
        // if starting at i subtract midpoint;
        if (i === 0 ) {
            right -= nums[i];
            // console.log(`lTotal:${left} rTotal:${right}`)
        }
        // 
        else {
            // adds num left of midpoint to get left total
            left += nums[i-1];
            // removes num at midpoint to get right total
            right -= nums[i];
            // console.log(`lTotal:${left} rTotal:${right}`)
        }
        if (left === right) return i;
    }
}