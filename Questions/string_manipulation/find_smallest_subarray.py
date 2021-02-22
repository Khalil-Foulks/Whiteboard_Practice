# find smallest sub array containing at least 1 of each charater, return len
# ex. "sadfsa" smallest sub array is "sadf" len 4

def smallestSub(string):
    n = len(string)
     
    # Count all distinct characters.
    dist_count = len(set([x for x in string]))
     
    curr_count = {}
    count = 0
    start = 0
    min_len = n

    # maintain a window of characters that contains all characters of given string.
    for j in range(n):
        if string[j] not in curr_count:
            curr_count[string[j]] = 0

        curr_count[string[j]] += 1

        # If any distinct character matched then increment count        
        if curr_count[string[j]] == 1:
            count += 1
            
        # if any character is occurring more no. of times than its occurrence in pattern, if yes then remove it from starting and also remove the useless characters.     
        if count == dist_count:
            while curr_count[string[start]] > 1:
                if curr_count[string[start]] > 1:
                    curr_count[string[start]] -= 1
                     
                start += 1

            # Update window size     
            len_window = j - start + 1
             
            if min_len > len_window:
                min_len = len_window
                start_index = start

    smallestSub = str(string[start_index: start_index + min_len])
    print(smallestSub)
    return len(smallestSub)
    

string = "dabbcabc"
print(smallestSub(string))
