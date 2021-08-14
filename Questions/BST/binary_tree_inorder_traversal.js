/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var inorderTraversal = function(root) {
    return traverseHelper(root)
};

function traverseHelper(root, traversal = []){
    // if root doesn't exists
    if(root === null){
        return traversal
    }
    
    //if root's left exists, recursively travel left
    if(root.left != null){
        traverseHelper(root.left, traversal)
    }
    
    // push cur root to array
    traversal.push(root.val)
    
    //if root's right exists, recursively travel right
    if(root.right != null){
        traverseHelper(root.right, traversal)            
    }
    return traversal    
}

// order of pushing
    // left side b4 cur
    // left side b4 right
    // cur b4 right