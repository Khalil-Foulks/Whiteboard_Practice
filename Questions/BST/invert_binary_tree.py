# -----------plan--------------------

# Init stack
# push node into stack

# while stack is not empty
    # pop node off top of stack (FIFO)
    # swap that node's left and right nodes
    # push left node on stack 
    # push right node on stack
    # repeat until all nodes traversed


def invertBinaryTree(tree):
	stack = [tree]

	
	while stack != []:
		cur = stack.pop(0)
		
		if cur:
			cur.left, cur.right = cur.right, cur.left
			stack.append(cur.left)
			stack.append(cur.right)

# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# time complexity - O(n)
    # where n is the length of array

# space Complexity - O(n)
    # where n is the length of array