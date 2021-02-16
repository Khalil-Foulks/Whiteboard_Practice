#-------------Plan----------------------

# init min dif
    # set to abs of max num from array1 - max from array 2

# init ans array

# loop through 1st array 
    # loop through 2nd array
        # if abs difference of num from 1st array - num from 2nd array is lower than min dif
            # insert 2 values into ans array 
            # min dif become abs(num1 - num2)


# def smallestDifference(arrayOne, arrayTwo):
# 	minDif = abs(max(arrayOne) - max(arrayTwo))
# 	ans = [0,0]
	
# 	for i in arrayOne:
# 		for j in arrayTwo:
# 			if abs(i - j) <=  minDif:
# 				ans = [i,j]
# 				minDif = abs(i - j)
# 	return ans

# Time Complexity - O(n^2)
# Space Complexity - O(1)

#--------------------------------------------------------------------------------
#-------------------------------Optimal Solution----------------------------------

#-------------Plan----------------------

# init min dif
    # set to abs of max num from array1 - max from array 2

# init ans array
# init idx counter

# loop through 1st array 
    # as long as idx != len(arrayTwo)
        # store cur numTwo
        # if abs difference of num from 1st array - num from 2nd array is lower than min dif
            # insert 2 values into ans array 
            # min dif become abs(num1 - num2)
        # increment counter by 1
    # reset idx counter to 0 and continue looping


def smallestDifference(arrayOne, arrayTwo):
	minDif = abs(max(arrayOne) - max(arrayTwo))
	ans = [0,0]
	idx = 0 
	
	for num in arrayOne:
		while idx != len(arrayTwo):
			numTwo = arrayTwo[idx]
			if abs(num - numTwo) <=  minDif:
				ans = [num,numTwo]
				minDif = abs(num - numTwo)
			idx += 1
		idx = 0
	
	return ans

# Time Complexity - O(n)
# Space Complexity - O(1)