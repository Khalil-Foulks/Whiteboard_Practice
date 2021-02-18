#-------------------------Plan-------------------------------

# init words array = ''
# init start of word idx = 0
# loop through len of string
    # store char

    # if that char is an empty space
        # slice the string to create a word
        # append word to words arr
        # update start of word to be idx of next word

    # else if start of  a word is an empty space
        # append a an empty space string
        # update start of word to be idx of next word

    # append final word to words arr  

# init func reverse(list)
    # init sart
    # init end =0
    # init len(list) - 1
    # while start is < end
        # swap first and last word
        # move start one to the right
        # move  end one the the left


def reverseWordsInString(string):	
	words = []
	startOfWord = 0
	
	for idx in range(len(string)):
		char = string[idx]
		
		if char == " ":
			words.append(string[startOfWord:idx])
			startOfWord = idx
		elif string[startOfWord] == " ":
			words.append(" ")
			startOfWord = idx
			
	words.append(string[startOfWord:])
	
	reverse(words)
	return "".join(words)

def reverse(list):
	start, end = 0, len(list) - 1
	while start < end:
		list[start], list[end] = list[end], list[start]
		start += 1
		end -= 1

# Time Complexity: O(n) 
    # where n is number of characters in string

# Space Complexity: O(n)
    # where n is number of characters in string