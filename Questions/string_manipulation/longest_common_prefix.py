def longestCommonPrefix(strs):
        # if no strings exist return empty string
        if not strs:
            return ""
        
        # store the string with the smallest len
        shortest = min(strs,key=len)
        
        # grab the idx and character in shortest string
        for i, ch in enumerate(shortest):
            # grab other string
            for other in strs:
                # if other string's char doesn't match shortest string cur char
                if other[i] != ch:
                    # return the longest prefix up to cur idx from shortest string
                    return shortest[:i]
        # otherwise shortest string is the longest prefix; return shortest
        return shortest 


strs = ["flower","flow","flight"]

print(longestCommonPrefix(strs))

# Time Complexity: O(n) 
    # where n is number of strings in the array

# Space Complexity: O(1)
