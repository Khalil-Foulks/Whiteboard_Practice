# -------------Plan-------------------------

# loop through word
    # sort the word
    # if the letter in word is not in hash tbl
        # add the word as a key 
        # set value to [word]
    # else
        # append word to sorted word's anagram array
    
# return an array containing every sorted word's anagram array


def groupAnagrams(words):
	hashTbl = {}
	
	for word in words:
		sortedWord = ''.join(sorted(word))
		if sortedWord in hashTbl:
			hashTbl[sortedWord].append(word)
		else:
			hashTbl[sortedWord] = [word]
	return list(hashTbl.values())


# Time Complexity: O(log(n)) 
    # where n is length of the longest words

# Space Complexity: O(n)
    # where n is length of the longest words