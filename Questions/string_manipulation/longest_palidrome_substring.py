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