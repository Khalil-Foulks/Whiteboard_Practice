# https://leetcode.com/problems/contains-duplicate/

# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true

# Example 2:

# Input: [1,2,3,4]
# Output: false

# Example 3:

# Input: [1,1,1,3,3,4,3,2,4,2]
# Output: true

def containsDuplicate(self, nums):   
    # input = list of integers
    # if a value appears twice or more than twice return True
    # otherwise if each int appears once return False
    
    # create an empty dict
    # loop through list 
    # check if int is already in the dict
    # if not in dict add int to dict as key; value = 1
    # if int already in dict increment value by 1 and return true
    # if looped through entire list return false
    
    
    intCounter = {}
    
    for num in nums:
        if num not in intCounter:
            intCounter[num] = 1
        else:
            intCounter[num] += 1
            return True
    return False