# input 
	# unsorted array
	

# output 
	# sorted array
	
# -----------------plan-----------------------------

# init pivot pointer = 0 idx
# init left pointer = 1 idx
# init right pointer = last idx

# if len of array <= 1  
	# return the array

# while left pointer is <= right pointer 
	# check if num at left pointer is > pivot & num at right pointer is < pivot
		# if true swap left and right pointer nums
		
	# check if left num is <= pivot 
		# move left pointer to the right
	
	# else if right num is >= pivot
		# move right pointer to the left
		
# swap pivot and right pointer nums

# repeat entire process for all values to the left of pivot
# repeat entire process for all values to the right of pivot

def quickSortHelper(array, start, end):
    if start >= end:
        return
	
    pivot = start
    left = start + 1
    right = end

    while right >= left:
        if array[left] > array[pivot] and array[right] < array[pivot]:
            swap(array,left,right)

        if array[left] <= array[pivot]:
            left += 1
            
        if array[right] >= array[pivot]:
            right -= 1
        
    swap(array,pivot,right)

    # left side of pivot
    quickSortHelper(array, start, right-1)

    # right side of pivot
    quickSortHelper(array, right+1, end)

def swap(array, a, b):
    array[a], array[b] = array[b], array[a]

def quickSort(array):
    if len(array) <= 1:
        return array

    quickSortHelper(array, 0, len(array) - 1)
    return array

# time complexity - O(n^2)
    # where n is the length of array

# space Complexity - O(log(n))
    # where n is the length of array