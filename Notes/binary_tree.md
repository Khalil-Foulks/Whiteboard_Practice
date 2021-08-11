# Binary Tree

### A binary tree is a tree where every node has **at most two children**. 

## Types  
-------
### Full Binary Tree
![Full Binary Tree](../images/tree/full_binary_tree.png "Full Binary Tree")
- A full binary tree is a binary tree where every node has exactly 0 or 2 children.  

### Perfect binary trees 
![Perfect Binary Tree](../images/tree/perfect_binary_tree.png "Perfect Binary Tree")
- A perfect binary tree doesn't have room for any more nodes—unless we increase the tree's height. 

### Complete binary trees 
![Complete Binary Tree](../images/tree/complete_binary_tree.png "Complete Binary Tree")
- A complete binary tree is like a perfect binary tree missing a few nodes in the last level. Nodes are filled in from left to right.

### Balanced binary trees 
![Balanced Binary Tree](../images/tree/balanced_binary_tree.png "Balanced Binary Tree")
- A complete binary tree is like a perfect binary tree missing a few nodes in the last level. 
- Nodes are filled in from left to right.

### Binary search tree
![Binary Search Binary Tree](../images/tree/binary_search_tree.png "Binary Search Tree")
- A binary search tree is a binary tree where the nodes are ordered in a specific way. 
- For every node:
    - The nodes to the **left** are **smaller** than the **current node**.
    - The nodes to the **right** are **larger** than the **current node**.
    ----------------------------------------------------------------------------------------
    **Strengths**:

    - Good performance across the board. Assuming they're balanced, binary search trees are good at lots of operations, even if they're not constant time for anything.

    - BSTs are sorted.

    **Weaknesses**:

    - Poor performance if unbalanced. 
        - Some types of binary search trees balance automatically, but not all. If a BST is not balanced, then operations become **O(n)**.
    - **No O(1) operations**. BSTs aren't the fastest for anything. 
        - On average, an array or an object will be faster.

