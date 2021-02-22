# if string contains spaces or non alphanumerics

def isPalindrome(s):
    s = "".join(s.split())
    s = s.lower()
    string = remover(s)
    # print(string)

    if len(string) == 1:
        return True

    if string[0] == string[-1]:
        backwards = []

        for char in reversed(string):
            backwards.append(char)
        return string == "".join(backwards)	
    return False

def remover(string):
    values = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
    for item in string:
        if item not in values:
            string = string.replace(item, "")
    return string

print(isPalindrome("A man, a plan, a canal: Panama"))

# Time Complexity - O(n)
    # where n is the length of string

# Space Complexity - O(n)
    # where n is the length of string