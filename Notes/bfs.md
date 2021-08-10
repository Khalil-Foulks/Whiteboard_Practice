# Breadth-First Search (BFS) and Breadth-First Traversal 

- **Breadth-first search (BFS)** is a method for exploring a tree or graph. 
- In a **BFS**, you first explore **all the nodes one step away**, then **all the nodes two steps away**, etc. 

Here's a how a BFS would traverse this tree, starting with the root:
![Binary Tree](../images/bfs/bfs_1.png "A Binary Tree")

We'd visit all the immediate children (all the nodes that're one step away from our starting node):
![Binary Tree](../images/bfs/bfs_2.png "A Binary Tree")

Then we'd move on to all those nodes' children (all the nodes that're two steps away from our starting node):
![Binary Tree](../images/bfs/bfs_3.png "A Binary Tree")

And so on:

![Binary Tree](../images/bfs/bfs_4.png "A Binary Tree")

Until we reach the end. 