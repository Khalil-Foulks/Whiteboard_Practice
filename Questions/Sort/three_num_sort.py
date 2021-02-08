# input
	# 2 arrays
		# 1st array will only contain numbers in 2nd array
			# might not contain every integer from 2nd array
		# 2nd is the order that the 1st array's integers should be ordered

# output 
	# the 1st array sorted in place according to 2nd array
	# can't use extra space

# --------------plan---------------------------

# store val of firstNum in order
# store val of secondNum in order

# init first idx pointer starting at 0
# init second idx pointer starting at 0
# init third idx pointer starting at end of array

# while 3rd index is to the right of 2nd index
	# store value at 2nd idx
	
	# if that value matches 1st num from order array
		# swap 1st and 2nd idx
		# increment 1st idx pointer
		# increment 2nd idx pointer
		
	# elif value matches 2nd num from order array
		# increment 2nd idx pointer
		
	# otherwise 2nd idx must match 3rd num from order array
		# swap 2nd and 3rd idx
		# decrement third idx

def threeNumberSort(array, order):
	firstVal = order[0]
	secondVal = order[1]
	
	#these are where the vals should go when swapping
	firstIdx, secondIdx, thirdIdx = 0, 0, len(array) - 1
	
	while secondIdx <= thirdIdx:
		value = array[secondIdx]
		
		if value == firstVal:
			array[secondIdx], array[firstIdx] = array[firstIdx], array[secondIdx] 
			firstIdx += 1
			secondIdx += 1
		elif value == secondVal:
			secondIdx += 1
		else:
			array[secondIdx], array[thirdIdx] = array[thirdIdx], array[secondIdx]
			thirdIdx -= 1
			
	return array

# time complexity - O(n)
    # where n is the length of array

# space Complexity - O(1)
    # constant; swapping done in place; no extra space used