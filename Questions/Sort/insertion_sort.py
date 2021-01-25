# input
    # unsorted array

# output 
    # sorted array

# -------------plan---------------

# loop through entire array
# init j
    # set j to be equal to current idx from loop
# while j is not 0 and cur number is less than prev num
    # swap the 2 numbers
    # decrement j to continue the comparison in reverse
# return sorted array

def insertionSort(array):
	for i in range(1, len(array)):
		j = i
		while j > 0 and array[j] < array[j - 1]:
			swap(j, j - 1, array)
			j -= 1
	return array

def swap(i, j, array):
	array[i], array[j] = array[j], array[i] 


# Time Complexity: O(n^2) 
    # where n is numbers in array

# Space Complexity: O(1)
    # swapping occurs in place