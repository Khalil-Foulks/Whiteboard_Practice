# input: 
	# array of integers
	# target sum

# output
	# array containing 2 numbers added together that equal target sum
	# if no pair exists then return empty array

# only one pair at MOST will equal target sum
# pair of numbers can be in any order
# input array will never be empty
# intgers are all distinct
# can't add a single integer by itself

# ----------------PLAN------------------------------------------------
# init n1 pointer
	# n1 pointer starts at 0 index
# init n2 pointer
	# starts at 1 index
# init empty ans array
# loop through array checking if n1 + n2 = target
# if so add both nums to ans array
# otherwise increase n2 pointer by 1
# repeat check
# if n2 is at the end of array and n1 + n2 is not target increase n1 by 1
# move n2 to 1 + n1
# repeat until n1 is 1 less than # of elements in array


def twoNumberSum(array, targetSum):
	
	ans_array = []
	
	if len(array) < 2:
		return ans_array 
	
	for i in range(len(array) - 1):
		n1 = array[i]
		for j in range(len(array) - 1):
			n2 = array[j+1]
			if n1 + n2 == targetSum and n1 is not n2:
				ans_array.append(n1)
				ans_array.append(n2)
				return ans_array
	return ans_array

print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10))


# n is the length of input array

# time complexity: O(n^2) Nested for loop

# space complexity: O(1) The only extra storage necessary is for the answer array which will always only hold a pair on nums or be empty. This means space is constant.