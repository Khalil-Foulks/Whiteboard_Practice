/**
    create a way to keep a running total
    store lowest possible number in JS as the largest sum
    loop through nums array
    set prev to be largest sum out of running total + cur num or cur num
    set largest sum to be largest sum or update to be running total
    return the largest sum
*/

var maxSubArray = function(nums) {
    
    let prev = 0;
    // lowest possible number
    let max = -Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
}