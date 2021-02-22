def strStr(haystack, needle):
    # return 0 if str is empty or haystack = needle
    
    # create window
        # startidx = 0
        # endidx = len(needle)
    
    # while end <= len(haystack)
        # if window == needle
            # return startidx
        # else
            # startidx += 1
            # endidx += 1
    
    # return -1 if needle not in haystack
    
    start = 0 
    end = len(needle)
    
    if needle == "" or haystack == needle:
        return 0

    while end <= len(haystack):
        window = haystack[start:end]
        
        if window == needle:
            return start
        else:
            start += 1
            end += 1
    return -1

# Time Complexity: O(n) 
    # where n is number of letters in the haystack

# Space Complexity: O(1)