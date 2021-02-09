# ------------------plan----------
# if len of string is 1
	# return true
	
# if first char in string matches last char in string
	# loop through array once forwards
		# convert each char into an element stored in an array
		
	# loop through array once backwards
		# convert each char into an element stored in an array
		
	# if both arrays match 
		# return true


def isPalindrome(string):
	if len(string) == 1:
		return True
	
	if string[0] == string[-1]:
		backwards = []
			
		for char in reversed(string):
			backwards.append(char)
			
		return string == "".join(backwards)	
		
	return False

# Time Complexity - O(n)
    # where n is the length of array

# Space Complexity - O(n)
    # where n is the length of array