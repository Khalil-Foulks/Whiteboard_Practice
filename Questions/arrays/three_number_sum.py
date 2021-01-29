# input
	# an array of unique integers
	# integers can be negatives

# output 
	# an array containing array of integers that equal the target when summed
	# inner array containing nums should be in ascending order
	# outer array containing the arrays of triplets should be in ascending order based on first int in triplets array
	# if no combination of nums = target return an empty array


# init cache

# if array is not empty
	# loop through array
		# sort array
		# insert all nums into cache

	# loop through array
		# newTarget = target - curNum
		# create a 2nd loop starting one idx to the right of 1st loop
		# subtract 2nd loop num from newTarget
		# check the cache to see if that num exists 
		# if it does insert into a new array from smallest to largest num
		# otherwise progress in 1st loop
		# if not combo of 3 nums = target
			# return empty array
			
# otherwise return an empty array

def threeNumberSum(array, targetSum):
	cache = {}
	ans = []
	
	if array:
		array.sort()
		# print(f'Sorted:{array}')
		
		for i,num in enumerate(array):
			cache[num] = i
			# print(f'Cache:{cache}')
		
		for i in range(len(array) - 1):
			newTarget = targetSum - array[i]
			for j in range(i+1, len(array) - 1):
				cacheTarget = newTarget - array[j]
				if cacheTarget in cache:
					cacheIdx = cache[cacheTarget]
					if array[j] is not array[i] and array[j] is not array[cacheIdx] and array[i] is not array[j] and array[i] is not array[cacheIdx]:
						ans.append([array[i],array[j],array[cacheIdx]])

		return remove(ans)	
	return ans

# removes duplicate triplets arranged in different orders
def remove(lst):
    res = [] 
    check = set() 
    for x in lst:
        hsh = tuple(sorted(x)) 
        if hsh not in check: 
            res.append(x) 
            check.add(hsh) 
               
    return res 

# time complexity: O(n^2)
    # where n is numbers in array

# space complexity: O(n)
    # where n is numbers in array