def threeNumberSum(array, targetSum):
    # sort the array
    array.sort()
    # init empty array for answer
    ans = []
    # loop through input array
    for i in range(len(array) - 2):
        # init left pointer
        left = i + 1
        # init right pointer
        right = len(array) - 1
        # run until both pointers swap
        while left < right:
            # add all numbers
            currentSum = array[i] + array[left] + array[right]
            # check if cur sum is the target
            if currentSum == targetSum:
                # if so add the triplet array to ans array
                ans.append([array[i], array[left], array[right]])
                # move left pointer 1 to the left
                left += 1
                # move right pointer one to the right
                right -= 1
            # if cur sum is lower than target, increase left pointer to get closer to target
            elif currentSum < targetSum:
                left += 1
            # if cur sum is greater than target, decrease right pointer to get closer to target
            elif currentSum > targetSum:
                right -= 1
    return ans

# time complexity: O(n^2)
    # where n is numbers in array

# space complexity: O(n)
    # where n is numbers in array