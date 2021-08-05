/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.randomSet = {}
    this.nums = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.randomSet){
        return false
    }
    else{
        this.randomSet[val] = this.nums.length
        this.nums.push(val)
        // console.log(this.randomSet) 
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.randomSet[val] === undefined){
     return false;   
    }
    
    const idx = this.randomSet[val];
    delete this.randomSet[val];
    const lastNum = this.nums.pop();
    
    if (this.nums.length === idx){
        // console.log(this.randomSet)
        return true;
    }
    
    this.randomSet[lastNum] = idx;
    this.nums[idx] = lastNum;
    // console.log(this.randomSet)
    return true  
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let min = 0
    let max = Math.floor(this.nums.length)
    let idx = Math.floor(Math.random() * (max - min) + min)
    // console.log(idx)
    return this.nums[idx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */