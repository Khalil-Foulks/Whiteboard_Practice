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