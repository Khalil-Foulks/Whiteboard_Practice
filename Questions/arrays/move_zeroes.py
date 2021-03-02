#----------------------- plan--------------------------
# set a idx count == 1
# loop through array
# if cur num at idx is 0 
    # remove 0 from array 
    # add 0 to end of array
# otherwise increase idx

def moveZeroes(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    
    idx = 0
    for num in range(0, len(nums) - 1):
        if nums[idx] == 0:
            nums.pop(idx)
            nums.append(0)
        else:
            idx += 1

# Time Complexity: O(n) 
    # where n is length of array

# Space Complexity: O(1) 
