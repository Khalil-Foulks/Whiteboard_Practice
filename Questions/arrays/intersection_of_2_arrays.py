# create hash table
# create ans array
# find largest array
# loop through largest array
    # add num to hashTbl in not there
    # if there increment cur num count in hash
# loop through smallest array
    # if cur num is hash table and counts > 0
        # append to ans array and decrement cur num count

def intersect(nums1, nums2):
    # create hash table
    # create ans array
    # find largest array
    # loop through largest array
    # add each num to hashTbl
    # loop through smallest array
    # if cur num is hash table and counts > 0
        # append to ans array and decrement cur num count
    
    counts = {}
    ans = []
    
    if len(nums1) < len(nums2):
        smallest = nums1
        largest = nums2
    else:
        smallest = nums2
        largest = nums1      
    
    for num in largest:
        if num not in counts:
            counts[num] = 1
        else:
            counts[num] += 1
    
    for num in smallest:
        if num in counts and counts[num] > 0:
            ans.append(num)
            counts[num] -= 1 
    return ans

# Time Complexity: O(n) 
    # where n is number of nums in the largest array

# Space Complexity: O(n)
    # where n is the number of nums in largest array