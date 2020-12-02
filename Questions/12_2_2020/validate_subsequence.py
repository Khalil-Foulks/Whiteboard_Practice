# input
# 2 seperate arrays

# output
# true 
	# if 2nd array has numbers in the same sequential order as 1st array
# false 
	# if nums out of order
	
# single number in 1st array should output true
# both arrays will never be empty

#---------------------Plan------------------------------
# init arr pointer
# init sequence pointer
# run as long as arr pointer and seq pointer are not larger than len of arr and len of seq
# check if number in array at current index = number in sequence at current index
	# if true increment seq array by 1
# always increment arr index by 1
# return true or false based on whether the entire sequence array has been traversed




def isValidSubsequence(array, sequence):
    arrIdx = 0
	seqIdx = 0
	
	while arrIdx < len(array) and seqIdx < len(sequence):
		if array[arrIdx] == sequence[seqIdx]:
			seqIdx += 1
		arrIdx += 1
	return seqIdx == len(sequence)


# n is the length of input array

# time complexity: O(n)

# space complexity: O(1) no extra storage needed
			