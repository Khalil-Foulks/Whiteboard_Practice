# https://www.algoexpert.io/questions/Branch%20Sums

# input 
# tree node

# output
# an array containing every possible paths' sum

# ------------------------Plan--------------------------------------
# init sum_helper function

# in branchSums func 
    # init sum_total
    # init array to store sums
    # call sum_helper pssing in root node, starting total, ans array

# in sum_helper 
    # check if curr node is None
        # if true stop
    # otherwise
        # add cur node value to total
        # check if both left and right node are None
            # if true append total to answer array
            # and stop
        # otherwise 
            # use recursion passing in left node, updated total and answer array
            # use recursion passing in right node, updated total and answer array







# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    # Write your code here.
	ans = []
	sum_helper(root, 0, ans)
	return ans

def sum_helper(node, total, ans):
	if node is None:
		return
	
	new_total = total + node.value
	print(new_total)
	if node.left is None and node.right is None:
		ans.append(new_total)
		return
	sum_helper(node.left, new_total, ans)
	sum_helper(node.right, new_total, ans)


# n is the number of nodes

# time complexity - O(n)

# space complexity - O(n)