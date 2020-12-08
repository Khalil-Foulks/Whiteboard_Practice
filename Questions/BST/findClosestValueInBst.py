# input:
# tree node
# target value

#output
# closest value

# ------------------------Plan--------------------------------------
# init helper function
# check if cur node is None
	# if true return closest
	# otherwise
		# check if (abs value of target - closest) is > (abs of target - cur value)
			# if true cur value is new closest
			# otherwise
				# check if cur value is greater than or less than target
					# if greater than traverse down left 
						# repeat all checks 
					# if less than traverse down right
						# repeat all checks
					# otherwise return closest


def findClosestValueInBst(tree, target):
	return helper(tree, target, tree.value)

def helper(tree, target, closest):
	if tree is None:
		return closest
	# print(tree.value)
	if abs(target - closest) > abs(target - tree.value):
		closest = tree.value
	if tree.value < target:
		return helper(tree.right, target, closest)
	elif tree.value > target:
		return helper(tree.left, target, closest)
	else:
		return closest


# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None