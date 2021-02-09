def isPalindrome(string):
    # 1st idx
    left = 0
    # last idx
	right = len(string) - 1
	
    # runs until it's gone through whole string
	while left < right:
        # check if 1st and last characters don't match
		if string[left] is not string[right]:
			return False
        # move both idxs closer to the middle
		left += 1
		right -= 1
	# if every character matched return True
	return True