# count = 0
# while count <= k + 1
    # remove num from end of nums
    # append to front of nums 
    # increment count


def rotate(nums, k):               
    count = 0
    idx = len(nums) - 1
    while count < k:
        popped = nums.pop(idx)
        nums.insert(0,popped)           
        count += 1

# Time Complexity: O(n) 
    # where n is k

# Space Complexity: O(1)