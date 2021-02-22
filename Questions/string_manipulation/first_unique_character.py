def firstUniqChar(s):     
    hashTbl = {}
    
    for char in s:
        if char not in hashTbl:
            hashTbl[char] = 0
        hashTbl[char] += 1
    # print(hashTbl)    
        
    for i, char in enumerate(s):                 
        if hashTbl[char] == 1:
            return i
    return -1

# Time Complexity: O(n) 
    # where n is number of letters in the string

# Space Complexity: O(1)
    # max number of letters that can be in the hashTbl is 26