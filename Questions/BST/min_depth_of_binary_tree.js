// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null; 
//     }
// };
  
  
const find_minimum_depth = function(root) {
    let minDepth = 0
    let queue = []
  
    // there is no node
    if (root === null){
      return minDepth
    }
  
    queue.push(root)
    while (queue.length > 0) {
      let levelsize = queue.length
      minDepth++
      for(i = 0; i < levelsize; i++){
        curNode = queue.shift()
        // there is no child node; this is the shortest path
        if (curNode.left === null && curNode.right === null){
          return minDepth
        }
        // add left node to traverse left
        if (curNode.left !== null) {
          queue.push(curNode.left);
        }
        // add right node to traverse right
        if (curNode.right !== null) {
          queue.push(curNode.right);
        }
      }
    }
};

/* 
    time complexity O(N) - checking every node in the tree
    space complexity O(N) - needs space for every node in the queue
*/


// var root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
// root.left.left = new TreeNode(9)
// root.right.left.left = new TreeNode(11)
// console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)