# plan

# init array to store output
# init cur times a character appears
# loop through string
    # store cur char
    # store prev char
    # if cur doesn't match prev or cur times a character appears is 9
        # convert counter to a string and append to array
        # append prev char to array
    # increment length
# append final character count
# append final character
# join output array to empty string
# return concat string         


def runLengthEncoding(string):
    encodedStrChars = []
	curLength = 1
	
	for i in range(1, len(string)):
		curChar = string[i]
		prevChar = string[i - 1]
		
		if curChar != prevChar or curLength == 9:
			encodedStrChars.append(str(curLength))
			encodedStrChars.append(prevChar)
			curLength = 0
		curLength += 1
		
	encodedStrChars.append(str(curLength))
	encodedStrChars.append(string[len(string) - 1])
	return ''.join(encodedStrChars)

# time complexity - O(n)
    # where n is the length of array

# space Complexity - O(n)
    # where n is the length of array