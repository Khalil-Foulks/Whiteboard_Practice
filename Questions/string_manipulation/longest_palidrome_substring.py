# -------------------plan----------------------------------------

# init empty longest substring
# loop through string once to grab start of sub string
    # loop through again to grab end of substring
        # init substring
        # if len substring > len of longest substring and it's a palindrome
            # longest = substring
# return longest

# create ispalindrome function
    # init start idx = 0
    # init end idx = len - 1
    
    # while start < end
        # if start char in string and  end char in string are not the same
            # it can't be a palindrome return false 
        # start += 1
        # end -= 1
    # return true 

def longestPalindromicSubstring(string):
	longest = ''
	for i in range(len(string)):
		for j in range(i, len(string)):
			substring = string[i:j+1]
			if len(substring) > len(longest) and isPalindrome(substring):
				longest = substring
	return longest

def isPalindrome(string):
	start = 0
	end = len(string) - 1
	
	while start < end:
		if string[start] != string[end]:
			return False
		start += 1
		end -= 1
	return True

# Time Complexity - O(n^3)
# Space Complexity - O(n)