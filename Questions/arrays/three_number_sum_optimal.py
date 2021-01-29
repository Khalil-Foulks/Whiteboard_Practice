def threeNumberSum(array, targetSum):
    array.sort()
    ans = []
    for i in range(len(array) - 2):
        left = i + 1
        right = len(array) - 1
        while left < right:
            currentSum = array[i] + array[left] + array[right]
            if currentSum == targetSum:
                ans.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currentSum < targetSum:
                left += 1
            elif currentSum > targetSum:
                right -= 1
    return ans

# time complexity: O(n^2)
    # where n is numbers in array

# space complexity: O(n)
    # where n is numbers in array