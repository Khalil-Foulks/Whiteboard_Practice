# https://www.algoexpert.io/questions/Node%20Depths
# input 
    # nodes

# output
    # an integer that represents the sum depth values of each node in BT

# ------------------------Plan--------------------------------------
# init ans array
# init sum helper function that takes in a node, a starting total and the ans array
    # check if cur node is none
        # if true stop
        # otherwise
            # increment passed in total by 1
            # add new total to ans array
            # use recursion to call sum helper passing in left and right node, the new total, and the ans array

def nodeDepths(root):
    # Write your code here.
	ans = []
	sum_helper(root, -1, ans)
	# print('Grand total', ans)
	return sum(ans)

def sum_helper(node, total, ans):
	if node is None:
		return
	
	new_total = total + 1	
	ans.append(new_total)
	# print('total:',ans)
	
	sum_helper(node.left, new_total, ans)
	sum_helper(node.right, new_total, ans)

# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    
# n is the number of nodes

# time complexity - O(n)

# space complexity - O(n)
