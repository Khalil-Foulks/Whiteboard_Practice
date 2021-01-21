# input
	# array of nums

# output
	# sorted array of nums smallest to largest


# create swap function 
    # swaps two numbers in place in an array using an idx and idx + 1

# init sortted flag
    # set to false

# init counter
# create while loop
    # set sorted to true
    # loop where len(array) - 1 - counter
        # if cur num is > next number 
        # run swap func
        # reset is sorted flag to false
    # increment counter by 1
# return sorted input array




def bubbleSort(array):
    isSorted = False
    counter = 0
    while not isSorted:
        isSorted = True
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                swap(i, i + 1, array)
                isSorted = False
        counter += 1
    return array 

def swap(i, j, array):
	array[i], array[j] = array[j], array[i] 


# Time Complexity: O(n^2) 
    # where n is numbers in array

# Space Complexity: O(1)
    # swapping occurs in place