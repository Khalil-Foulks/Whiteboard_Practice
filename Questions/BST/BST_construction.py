class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        # Write your code here.	
		if value < self.value:
			if self.left is None:
				self.left = BST(value)
			else:
				self.left.insert(value)
		else:
			if value >= self.value:
				if self.right is None:
					self.right = BST(value)
				else:
					self.right.insert(value)		
        # Do not edit the return statement of this method.
        return self

    def contains(self, value):
		if self.value == value:
			return True
		else:
			if self.value >= value:
				if self.left:
					if self.left.value == value:
						return True
					else:
						self.left.contains(value)
			else:
				if self.right:
					if self.right.value == value:
						return True
					else:
						self.right.contains(value)	
		return False

    def remove(self, value, parentNode=None):
        # Write your code here.
		curNode = self
		while self is not None:
			if value < curNode.value:
				parentNode = curNode
				curNode = curNode.left
			elif value > curNode.value:
				parentNode = curNode
				curNode = curNode.right
			else:	
				if curNode.left is not None and curNode.right is not None:
					curNode.value = curNode.right.getMinValue()
					curNode.right.remove(curNode.value,curNode)
				elif parentNode is None:
					if curNode.left is not None:
						curNode.value = curNode.left.value
						curNode.right = curNode.left.right
						curNode.left = curNode.left.left
					elif curNode.right is not None:
						curNode.value = curNode.right.value
						curNode.left = curNode.right.left
						curNode.right = curNode.right.right
					else:
						pass
				elif parentNode.left == curNode:
					parentNode.left = curNode.left if curNode.left is not None else curNode.right
				elif parentNode.right == curNode:
					parentNode.right = curNode.left if curNode.left is not None else curNode.right
				break
        # Do not edit the return statement of this method.
        return self

	def getMinValue(self):
		curNode = self
		while curNode.left is not None:
			curNode = curNode.left
		return curNode.value


# Time Complexity:
    # Inserting: O(n)
    # Searching: O(n)
    # Removing: O(n)

# Space Complexity:
    # Inserting: O(1)
    # Searching: O(1)
    # Removing: O(1)