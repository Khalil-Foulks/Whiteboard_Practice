def reverseString(s):
    """
    Do not return anything, modify s in-place instead.
    """
    
    # leftidx = 0
    # rightidx = len(arr) - 1

    # while rightidx > leftidx
        # swap char at left and right idx
        # increment left
        # decrement right
    # return array

    left = 0
    right = len(s) - 1

    while right > left:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s

# Time Complexity: O(n) 
    # where n is number of letters in the array

# Space Complexity: O(1)
