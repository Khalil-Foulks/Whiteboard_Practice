# store abs of x
# convert to a string
# reverse string
# convert str back to num

# if reversed num falls outside contraints
    # return 0
    
# if original number was < 0
    # multiply reversed number by -1
    # return reversed num
# else
    # return reversed num

def reverse(x):        
    absNum = abs(x)
    # convert num to str; reverse string
    s = str(absNum)[::-1]
    # convert back to int
    s = int(s)
    
    # return 0 if outside contraints
    if s < -2**31 or s > 2**31 - 1:
        return 0

    if x < 0 :
        return s * -1
    return s

# Time Complexity - O(n)
    # n is the len of input number
    
# Space Complexity - O(1)            
        