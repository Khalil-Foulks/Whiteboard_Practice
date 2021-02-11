# plan
# init hash tble
# find max len of array
# loop through array adding 1st occurance of an int to hash tbl
# do a seperate loop from 1 - max length + 1
    # search hash tbl for cur num
        # if it's not in hash tbl that's the missing num
# else the missing num must be 1 higher than the max num in the array

def solution(A):
    hashTbl = {}
     
    max = len(A)
    for i in A:
        if not i in hashTbl:
            hashTbl[i] = True
            
    for i in range(1, max + 1):
        if i not in hashTbl:
            return i
    return i + 1

# Time Complexity O(n)
# Space Complexity O(n)