var summaryRanges = function(nums) {
    // storage
    var left = 0
    var ans = []
    
    // '#' is a placeholder to do comparison for last int in nums
    nums.push('#')
    
    // iterate over nums arr
    for(var i = 1; i < nums.length; i++)
        if(nums[i] - nums[left] !== i - left){
            // conditional check for when to end range
            if(i - left > 1){
                ans.push(nums[left] + '->' + (nums[i-1]))
            }
            else{
               ans.push(nums[left].toString()) 
            }
            // move left to the right by 1
            left = i
    }
    return ans
}

/* 
  time complexity O(n) : n is num of ints in nums
  space complexity O(1) : 
*/