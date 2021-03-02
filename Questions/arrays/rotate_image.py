# when rotating every thing in same idx gets grouped in 1 array
    # starts from last sub array to first sub array (right -> left)

#-------------------------------------plan-----------------------------
# create hash table
# create a key value pair from 0 to len of array - 1 
    # idx as a key, blank array as value
# loop through main array in reverse
# loop through sub array 
    # grab cur num 
    # append cur num to array at matching idx in hash table
# loop through main array replace each array with corresponding hash table array

def rotate(matrix):
    """
    Do not return anything, modify matrix in-place instead.
    """
    
    subArrs = {}
    
    for i in range(0,len(matrix)):
        subArrs[i] = []

    for i in reversed(range(len(matrix))):
        # print(matrix[i])
        for j, num in enumerate(matrix[i]):
            subArrs[j].append(num)
    # print(subArrs)
    
    for i in range(len(matrix)):
        matrix[i] = subArrs[i]
    # print(matrix)

# Time Complexity: O(n^2) 
    # where n is length of matrix array

# Space Complexity: O(n) 