def removeDuplicates(self, nums):
    # given sorted array
    # remove the duplicates
    # can't use another array to remove the duplicates
    # Answer: return the new length
    # since array is sorted i could just compare current to next
    
    len_ = 1
    if len(nums)==0:
        return 0
    # for ever item in array except the 1st
    for i in range(1,len(nums)):
        # if current item is not equal to prev 
        if nums[i] != nums[i-1]:
            
            nums[len_] = nums[i]
            # increase the length by 1
            len_ +=1
    # delete the duplicates
    del nums[len_ : len(nums)]
    return len_    

# Time Complexity: O(n) 
    # where n is length of nums array

# Space Complexity: O(1)