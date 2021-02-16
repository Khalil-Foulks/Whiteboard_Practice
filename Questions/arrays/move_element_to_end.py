# Input
    # array of ints
    # toMove integer
    
# Output
    # sorted array of ints where all numbers matching toMove int 
    # are moved to the end of the input array

# ----------------------Plan--------------------------------
# init idx count = 0
# loop through array grabbing idx
    # if num at a idx count is = toMove int
        # remove it 
        # add toMove num to end of array
    # else increment idx count
# return input array

def moveElementToEnd(array, toMove):
    idx = 0
    for num in array:
        if array[idx] == toMove:
            array.pop(idx)
            array.append(toMove)
        else:
            idx += 1
    return array

# Time Complexity - O(n)
# Space Complexity - O(1)