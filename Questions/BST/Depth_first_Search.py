#https://www.algoexpert.io/questions/Depth-first%20Search

# input
	# nodes
	# children array

# output
	# array containing nodes in search order
	
# --------------------------------Plan------------------------------------
    # add cur node to ans array
    # loop through each node in cur node's children array
    # call DFS function again passing in ans array
    # return the ans array
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for node in self.children:
            node.depthFirstSearch(array)
        return array
