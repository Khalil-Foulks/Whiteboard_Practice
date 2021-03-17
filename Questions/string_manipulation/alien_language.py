def isAlienSorted(words, order):
    # create hash table 
    # map each letter in order string to hash table
        # letter = key
        # i + 1 = value
    
    order_idx = {}
    
    for i, letter in enumerate(order):
        order_idx[letter] = i + 1   
        
    for i in range(len(words) - 1):
        word1 = words[i]
        word2 = words[i+1]

        # Find the first difference word1[k] != word2[k].
        for k in range(min(len(word1), len(word2))):
            # If letter in word1 < letter in word 2, it's not sorted.
            if word1[k] != word2[k]:
                if order_idx[word1[k]] > order_idx[word2[k]]:
                    return False
                break
        else:
            # If we didn't find a first difference, the
            # words are like ("app", "apple").
            # shortest word should be b4 longest word, if not it's not sorted
            if len(word1) > len(word2):
                return False
    return True