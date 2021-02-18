	# input 
		# an array of ints
	
	# output
		# if no number appears multiple times in array
			# return -1
			
		# return the first number that appears more than once
	
	# ------------------plan--------------------------------
	# init duplicate = 0
	# init duplicateIdx = len(arr)
	
	# if len(array) > 1
		# loop through array grabbing idx
			# loop through array starting at loop1 idx+1 ending at idx+1, grabbing idx
				# if j < duplicateIdx and array[loop1_idx] == array[loop2_idx]:
					# duplicate = curNum
					# duplicateIdx = j

	# if duplicate > 0
		# return duplicate
	# return -1

def firstDuplicateValue(array):		
	duplicate = 0
	duplicateIdx = len(array)
	
	if len(array) > 1:
		last = len(array)- 1
		for i in range(0, last):
			for j in range(i+1,last+1):
				if  j < duplicateIdx and array[i] == array[j]:
					duplicate = array[i] 
					duplicateIdx = j
	if duplicate > 0:
		return duplicate
	return -1


# Time Complexity: O(n^2) 
    # where n is number of integers in the array

# Space Complexity: O(n)
    # where n is number of integers in the array