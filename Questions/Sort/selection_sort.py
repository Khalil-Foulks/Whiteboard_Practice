# input
    # unsorted array

# output 
    # sorted array

# -------------plan---------------
# init swap helper func

# loop through entire array
    # store cur index
    # store smallest numbers index
    # do a 2nd loop starting 1 idx higher than 1st loop
        # check if ncurrent num in 2nd loop is smaller than smallest number in array
            # if  so make that the new smallest
    # swap smallest number and cur idx
# return sorted array
    

# return sorted array

def selectionSort(array):
    for i in range(0, len(array) - 1):
        cur_index = i
        smallest_index = cur_index

        for j in range(cur_index + 1, len(array)):
            if array[j] < array[smallest_index]:
                smallest_index = j
				
        swap(smallest_index, cur_index, array)
    return array

def swap(i, j, array):
	array[i], array[j] = array[j], array[i] 


# Time Complexity: O(n^2) 
    # where n is numbers in array

# Space Complexity: O(1)
    # swapping occurs in place