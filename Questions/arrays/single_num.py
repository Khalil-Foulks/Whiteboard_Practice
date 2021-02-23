def singleNumber(nums):
    # create hash
    # loop through array
    # if num is not in hash add it
    # if num is in hash remove from hash
    
    # only 1 num should be in hash
    # return hash.values
    
    hashTbl = {}
    
    for num in nums:
        if num not in hashTbl:
            hashTbl[num] = num
        else:
            hashTbl.pop(num,None)
            
    for num in nums:
        if num in hashTbl:
            return num


# Time Complexity: O(n) 
    # where n is number of nums in the array

# Space Complexity: O(n)