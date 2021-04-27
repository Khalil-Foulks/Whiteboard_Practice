/**
    create total = 0
    create ans array
    loop through array
    add current num to total
    insert total into ans array
    return ans array
 */


var runningSum = function(nums) {
    let ans = []
    let total = 0
    
    for(let i = 0; i < nums.length; i++){
        total += nums[i]
        ans.push(total)
    }
    return ans
};

/**
    time complexity - O(n) - where n is the # of ints in nums

    space complexity - O(1) - no additional space used
 */