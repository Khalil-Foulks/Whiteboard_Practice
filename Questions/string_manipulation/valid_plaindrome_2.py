# if string contains spaces or non alphanumerics
def isPalindrome(s: str):
    left = 0
    right = len(s)-1


    while left < right:
        # skip to next idx going right, if char is not alphanumeric
        while left < right and not s[left].isalnum():
            left += 1
        # skip to next idx, going left, if char is not alphanumeric
        while left < right and not s[right].isalnum():
            right -= 1

        if left < right and s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True      

print(isPalindrome("A man, a plan, a canal: Panama"))

# Time Complexity - O(n)
    # where n is the length of string

# Space Complexity - O(1)